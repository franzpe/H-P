import { Response } from 'express';
import crypto from 'crypto';
import { verify } from 'jsonwebtoken';
import { inject, singleton } from 'tsyringe';
import EmailService from '../email/email.service';
import { User } from '../user/user.model';
import { sign } from 'jsonwebtoken';
import config from '../../config';
import { Connection, MoreThan, Repository } from 'typeorm';
import { Context } from 'vm';
import { compare, hash } from 'bcryptjs';
import { RefreshTokenPayload, setRefreshToken } from './auth';
import { Logger } from '../../utils/Logger';

@singleton()
class AuthService {
  private userRepository: Repository<User>;

  constructor(
    @inject(Connection) connection: Connection,
    @inject(EmailService) private emailService: EmailService,
    @inject(Logger) private logger: Logger
  ) {
    this.userRepository = connection.getRepository(User);
  }

  createRefreshToken = (user: User) => {
    return sign({ userId: user.id, tokenVersion: user.tokenVersion }, config.auth.refreshTokenSecret, {
      expiresIn: config.auth.refreshTokenExpiration
    });
  };

  createAccessToken = (user: User) => {
    return sign({ userId: user.id }, config.auth.accessTokenSecret, {
      expiresIn: config.auth.accessTokenExpiration
    });
  };

  checkRefreshToken = (token: string): RefreshTokenPayload | null => {
    let payload: any = null;

    try {
      payload = verify(token, config.auth.refreshTokenSecret);
    } catch (err) {
      console.log(err);
    }

    return payload;
  };

  revokeRefreshTokens = async (userId: number) => {
    await this.userRepository.increment({ id: userId }, 'tokenVersion', 1);
    return true;
  };

  login = async (email: string, password: string, { res }: Context) => {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Could not find user');
    }

    const valid = await compare(password, user.password);

    if (!valid) {
      throw new Error('Bad password');
    }

    setRefreshToken(res, this.createRefreshToken(user));

    return {
      accessToken: this.createAccessToken(user),
      user
    };
  };

  logout = (res: Response) => {
    setRefreshToken(res, '');
    return true;
  };

  register = async (email: string, password: string) => {
    const hashedPassword = await hash(password, config.auth.salt);

    try {
      await this.userRepository.insert({ email, password: hashedPassword });
    } catch (err) {
      console.log(err);
      // Todo error handling
      throw new Error('Database error');
    }

    return true;
  };

  forgotPassword = async (email: string) => {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Incorrect email');
    }

    const resetPasswordToken = crypto.randomBytes(20).toString('hex');
    // Expires in an hour
    const resetPasswordExpires = new Date();
    resetPasswordExpires.setHours(resetPasswordExpires.getHours() + 1);

    await this.userRepository.update(
      { id: user.id },
      {
        resetPasswordToken,
        resetPasswordExpires,
        tokenVersion: user.tokenVersion + 1
      }
    );

    try {
      const link = `http://localhost:3000/reset-password/${resetPasswordToken}`;
      await this.emailService.sendMail({
        to: email,
        subject: 'Password change request',
        text: `Hi, \n 
				Please click on the following link ${link} to reset your password. \n\n 
				If you did not request this, please ignore this email and your password will remain unchanged.\n`
      });
    } catch (err) {
      this.logger.error(err);
    }

    return true;
  };

  resetPassword = async (token: string, password: string) => {
    const user = await this.userRepository.findOne({
      where: { resetPasswordToken: token, resetPasswordExpires: MoreThan(new Date()) }
    });

    if (!user) {
      throw new Error('Password reset token is invalid or has expired.');
    }

    const hashedPassword = await hash(password, config.auth.salt);

    await this.userRepository.update(
      { id: user.id },
      { password: hashedPassword, resetPasswordExpires: undefined, resetPasswordToken: undefined }
    );

    await this.emailService.sendMail({
      to: user.email,
      subject: 'Your password has been changed',
      text: `Hi,\n 
			This is a confirmation that the password for your account ${user.email} has just been changed.`
    });

    return true;
  };

  changePassword = async (currentPassword: string, newPassword: string, userId: number) => {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) {
      throw new Error('Could not find user');
    }

    const valid = await compare(currentPassword, user.password);

    if (!valid) {
      throw new Error('Incorrect password');
    }

    const hashedNewPassword = await hash(newPassword, config.auth.salt);

    await this.userRepository.update({ id: user.id }, { password: hashedNewPassword });

    return true;
  };

  /**
   * Email change request sends verification email to an old one, with 1 hour validity
   *
   * @param email - new email
   * @param userId - userid
   */
  changeEmailRequest = async (email: string, userId: number) => {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) {
      throw new Error('Could not find user');
    }

    const changeEmailToken = crypto.randomBytes(20).toString('hex');

    // Expires in an hour
    const changeEmailExpires = new Date();
    changeEmailExpires.setHours(changeEmailExpires.getHours() + 1);

    await this.userRepository.update({ id: userId }, { changeEmail: email, changeEmailToken, changeEmailExpires });

    const link = `http://localhost:3000/change-email/${changeEmailToken}`;

    this.emailService.sendMail({
      to: user.email,
      subject: 'Email change request',
      text: `Hi,\nPlease click on the following link ${link} to change your email. \n\n 
				If you did not request this, please ignore this email and your email will remain unchanged.\n`
    });

    return true;
  };

  changeEmail = async (token: string) => {
    const user = await this.userRepository.findOne({
      where: { changeEmailToken: token, changeEmailExpires: MoreThan(new Date()) }
    });

    if (!user) {
      throw new Error('Email change token is invalid or has expired.');
    }

    await this.userRepository.update(
      { id: user.id },
      {
        email: user.changeEmail,
        changeEmail: undefined,
        changeEmailToken: undefined,
        changeEmailExpires: undefined
      }
    );

    await this.emailService.sendMail({
      to: user.changeEmail,
      subject: 'Your email has been changed',
      text: `Hi,\nThis is a confirmation that the email for your account has just been changed.`
    });

    return true;
  };
}

export default AuthService;
