import { Response } from 'express';
import { verify } from 'jsonwebtoken';

import config from '../../config';
import { MiddlewareFn } from 'type-graphql';
import { AuthenticationError } from 'apollo-server-express';
import { Context } from '../../utils/Context';

export type TokenPayload = { userId: number; iat: number; exp: number };

export type RefreshTokenPayload = { tokenVersion: number } & TokenPayload;

export const setRefreshToken = (res: Response, token: string) => {
  res.cookie('jid', token, {
    httpOnly: true,
    path: `/api/v${config.version}/refresh_token`
  });
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
