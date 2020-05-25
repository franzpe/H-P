import { Request, Response } from 'express';
import { hash, compare } from 'bcryptjs';

import { createRefreshToken, createAccessToken, setRefreshToken } from './auth';
import { User } from '../user/UserEntity';
import { Context } from '../../utils/Context';

const refreshToken = async (req: Request, res: Response) => {
  setRefreshToken(res, createRefreshToken(req.locals.user));
  return res.send({ ok: true, accessToken: createAccessToken(req.locals.user) });
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

const register = async (email: string, password: string) => {
  const hashedPassword = await hash(password, 12);

  try {
    await User.insert({ email, password: hashedPassword });
  } catch (err) {
    // Todo error handling
    throw new Error('Database error');
  }

  return true;
};

export default {
  refreshToken,
  register,
  login
};
