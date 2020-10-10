import { Request, Response, NextFunction } from 'express';
import { sign } from 'jsonwebtoken';
import { verify } from 'jsonwebtoken';

import config from '../../config';
import { User } from '../user/UserEntity';
import { HTTP400Error } from '../../utils/httpErrors';
import { MiddlewareFn  } from 'type-graphql';
import { AuthenticationError } from 'apollo-server-express';
import { Context } from '../../utils/Context';

export const createAccessToken = (user: User) => {
  return sign({ userId: user.id }, config.auth.accessTokenSecret, {
    expiresIn: config.auth.accessTokenExpiration
  });
};

export const createRefreshToken = (user: User) => {
  return sign({ userId: user.id, tokenVersion: user.tokenVersion }, config.auth.refreshTokenSecret, {
    expiresIn: config.auth.refreshTokenExpiration
  });
};

export const setRefreshToken = (res: Response, token: string) => {
  res.cookie('jid', token, {
    httpOnly: true,
    path: `/api/v${config.version}/refresh_token`
  });
};

export const checkRefreshToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jid;

  if (!token) {
    throw new HTTP400Error('Missing refresh token');
  }

  let payload: any = null;

  try {
    payload = verify(token, config.auth.refreshTokenSecret);
  } catch (err) {
    throw new HTTP400Error('Invalid refresh token');
  }

  // token is valid and we can send back an access_token
  const user = await User.findOne({ id: payload.userId });

  if (!user) {
    throw new HTTP400Error('Invalid refresh token');
  }

  if (user.tokenVersion !== payload.tokenVersion) {
    throw new HTTP400Error('Token has been revoked');
  }

  req.locals = { user: user };
  return next();
};

export const isAuth: MiddlewareFn<Context> = ({ context }, next) => {
  const authorization = context.req.headers['authorization'];

  if (!authorization) {
    throw new AuthenticationError('You need to be authenticated');
  }

  try {
    const token = authorization.split(' ')[1];
    const payload = verify(token, config.auth.accessTokenSecret);
    context.payload = payload as any;
  } catch (err) {
    throw new AuthenticationError('You need to be authenticated');
  }

  return next();
};
