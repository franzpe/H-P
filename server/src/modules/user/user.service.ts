import { inject, singleton } from 'tsyringe';
import { Connection, Repository } from 'typeorm';
import { User } from './user.model';
import { UserBasicInfoUpdateInput } from './user.types';

@singleton()
class UserService {
  private userRepository: Repository<User>;

  constructor(@inject(Connection) connection: Connection) {
    this.userRepository = connection.getRepository(User);
  }

  me = async (userId: number) => {
    const user = await this.userRepository.findOne({
      where: { id: userId }
    });

    return user;
  };

  updateBasicInfo = async (data: UserBasicInfoUpdateInput, userId: number) => {
    const user = await this.userRepository.findOne({
      where: { id: userId }
    });

    if (!user) {
      throw new Error('User not found');
    }

    await this.userRepository.save({ ...user, ...data } as User);

    return true;
  };
}

export default UserService;
