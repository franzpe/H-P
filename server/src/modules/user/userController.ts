import { User } from './UserEntity';
import { UserBasicInfoUpdateInput } from './userTypes';

const me = async (userId: number) => {
  const user = await User.findOne({
    where: { id: userId },
    relations: ['profile', 'profile.address', 'profile.address.country']
  });
  return user;
};

const updateBasicInfo = async (data: UserBasicInfoUpdateInput, userId: number) => {
  const user = await User.findOne({
    where: { id: userId }
  });

  if (!user) {
    throw new Error('User not found');
  }

  await User.save({ ...user, ...data } as User);

  return true;
};

export default { me, updateBasicInfo };
