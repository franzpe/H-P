import { User } from './UserEntity';

const me = (userId: number) => {
  return User.findOne(userId);
};

export default { me };
