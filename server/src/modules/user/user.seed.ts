import { hash } from 'bcryptjs';
import config from '../../config';

export const createUserSeed = async (): Promise<any> => {
  return [
    {
      id: 1,
      email: 'pobocekfrantisek@gmail.com',
      password: await hash('Fero', config.auth.salt),
      resetPasswordExpires: new Date(),
      resetPasswordToken: '',
      tokenVersion: 0
    }
  ];
};
