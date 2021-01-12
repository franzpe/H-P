import { inject, singleton } from 'tsyringe';
import { Connection, Repository } from 'typeorm';
import { Experience } from './experience.model';

@singleton()
class ExperienceService {
  private experienceRepository: Repository<Experience>;

  constructor(@inject(Connection) connection: Connection) {
    this.experienceRepository = connection.getRepository(Experience);
  }

  getAll = () => {
    return this.experienceRepository.find();
  };

  getAllByProfile = async (profileId: number) => {
    return this.experienceRepository.find({ where: { profile: { id: profileId } } });
  };
}

export default ExperienceService;
