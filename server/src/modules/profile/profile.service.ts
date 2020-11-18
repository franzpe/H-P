import { inject, singleton } from 'tsyringe';
import { Connection, Repository } from 'typeorm';
import { Profile } from './profile.model';

@singleton()
class ProfileService {
  private profileRepository: Repository<Profile>;

  constructor(@inject(Connection) connection: Connection) {
    this.profileRepository = connection.getRepository(Profile);
  }

  /**
   * TODO
   **/
  updateProfile = async (data: any) => {
    const profile = await this.profileRepository.findOne({
      where: { id: data.id }
    });

    if (!profile) {
      throw new Error('Could not find section');
    }

    await this.profileRepository.save({ ...profile, ...data } as Profile);

    return true;
  };
}

export default ProfileService;
