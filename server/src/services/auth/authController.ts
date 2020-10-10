import { Request, Response } from 'express';
import { hash, compare } from 'bcryptjs';
import crypto from 'crypto';

import { createRefreshToken, createAccessToken, setRefreshToken } from './auth';
import { User } from '../user/UserEntity';
import { Context } from '../../utils/Context';
import { getConnection, MoreThan } from 'typeorm';
import config from '../../config';
import { sendMail } from '../email';
import logger from '../../utils/Logger';

const refreshToken = async (req: Request, res: Response) => {
  setRefreshToken(res, createRefreshToken(req.locals.user));
  return res.send({ ok: true, accessToken: createAccessToken(req.locals.user) });
};

const revokeRefreshTokens = async (userId: number) => {
  await getConnection().getRepository(User).increment({ id: userId }, 'tokenVersion', 1);
  return true;
};

const login = async (email: string, password: string, { res }: Context) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error('Could not find user');
  }

  const valid = await compare(password, user.password);

  if (!valid) {
    throw new Error('Bad password');
  }

  setRefreshToken(res, createRefreshToken(user));

  return {
    accessToken: createAccessToken(user),
    user
  };
};

const logout = (res: Response) => {
  setRefreshToken(res, '');
  return true;
};

const register = async (email: string, password: string) => {
  const hashedPassword = await hash(password, config.auth.salt);

  try {
    await User.insert({ email, password: hashedPassword });
  } catch (err) {
    // Todo error handling
    throw new Error('Database error');
  }

  return true;
};

const forgotPassword = async (email: string) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error('Incorrect email');
  }

  const resetPasswordToken = crypto.randomBytes(20).toString('hex');
  // Expires in an hour
  const resetPasswordExpires = new Date();
  resetPasswordExpires.setHours(resetPasswordExpires.getHours() + 1);

  await getConnection()
    .getRepository(User)
    .update(
      { id: user.id },
      {
        resetPasswordToken,
        resetPasswordExpires,
        tokenVersion: user.tokenVersion + 1
      }
    );

  try {
    const link = `http://localhost:3000/reset-password/${resetPasswordToken}`;
    await sendMail({
      to: email,
      subject: 'Password change request',
      text: `Hi, \n 
      Please click on the following link ${link} to reset your password. \n\n 
      If you did not request this, please ignore this email and your password will remain unchanged.\n`
    });
  } catch (err) {
    logger.error(err);
  }

  return true;
};

const resetPassword = async (token: string, password: string) => {
  const user = await User.findOne({
    where: { resetPasswordToken: token, resetPasswordExpires: MoreThan(new Date()) }
  });

  if (!user) {
    throw new Error('Password reset token is invalid or has expired.');
  }

  const hashedPassword = await hash(password, config.auth.salt);

  await getConnection()
    .getRepository(User)
    .update(
      { id: user.id },
      { password: hashedPassword, resetPasswordExpires: undefined, resetPasswordToken: undefined }
    );

  await sendMail({
    to: user.email,
    subject: 'Your password has been changed',
    text: `Hi,\n 
    This is a confirmation that the password for your account ${user.email} has just been changed.`
  });

  return true;
};

const changePassword = async (currentPassword: string, newPassword: string, userId: number) => {
  const user = await User.findOne({ where: { id: userId } });

  if (!user) {
    throw new Error('Could not find user');
  }

  const valid = await compare(currentPassword, user.password);  

  if(!valid){
    throw new Error('Incorrect password');
  }
  
  const hashedNewPassword = await hash(newPassword, config.auth.salt);

  await getConnection()
  .getRepository(User)
  .update(
    { id: user.id },
    { password: hashedNewPassword }
  );

  return true ;
}

export default {
  refreshToken,
  revokeRefreshTokens,
  register,
  login,
  logout,
  forgotPassword,
  resetPassword, 
  changePassword  
};
