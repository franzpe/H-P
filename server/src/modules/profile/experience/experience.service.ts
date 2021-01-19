import { inject, singleton } from 'tsyringe';
import { Connection, Repository } from 'typeorm';
import { Experience } from './experience.model';

@singleton()
class ExperienceService {
  private repository: Repository<Experience>;

  constructor(@inject(Connection) connection: Connection) {
    this.repository = connection.getRepository(Experience);
  }

  getAll = () => {
    return this.repository.find();
  };

  getAllByProfile = async (profileId: number) => {
    return this.repository.find({ where: { profile: { id: profileId } } });
  };
}

export default ExperienceService;
