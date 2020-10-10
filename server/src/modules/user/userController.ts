import { User } from './UserEntity';

const me = async (userId: number) => {
  const user = await User.findOne({where: {id: userId}, relations: ["profile", "profile.basicSection"]}); 
  return user;
};

export default { me };
