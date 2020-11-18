import { NextFunction, Request, Response } from 'express';
import { inject, singleton } from 'tsyringe';
import { HTTP400Error } from '../../utils/httpErrors';
import UserService from '../user/user.service';

import { setRefreshToken } from './auth';
import AuthService from './auth.service';

@singleton()
class AuthController {
  constructor(
    @inject(AuthService) private authService: AuthService,
    @inject(UserService) private userService: UserService
  ) {}

  refreshToken = async (req: Request, res: Response) => {
    setRefreshToken(res, this.authService.createRefreshToken(req.locals.user));
    return res.send({ ok: true, accessToken: this.authService.createAccessToken(req.locals.user) });
  };

  checkRefreshToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.jid;

    if (!token) {
      throw new HTTP400Error('Missing refresh token');
    }

    const payload = this.authService.checkRefreshToken(token);

    if (!payload) {
      throw new HTTP400Error('Missing refresh token');
    }

    const user = await this.userService.me(payload.userId);

    if (!user) {
      throw new HTTP400Error('Invalid refresh token');
    }

    if (user.tokenVersion !== payload.tokenVersion) {
      throw new HTTP400Error('Token has been revoked');
    }

    req.locals = { user: user };
    return next();
  };
}

export default AuthController;
