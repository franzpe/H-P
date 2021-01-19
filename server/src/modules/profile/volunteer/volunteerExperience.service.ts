import { inject, singleton } from 'tsyringe';
import { Connection, Repository } from 'typeorm';
import { VolunteerExperience } from './volunteerExperience.model';

@singleton()
class VolunteerExperienceService {
  private repository: Repository<VolunteerExperience>;

  constructor(@inject(Connection) connection: Connection) {
    this.repository = connection.getRepository(VolunteerExperience);
  }

  getAll = () => {
    return this.repository.find();
  };

  getAllByProfile = async (profileId: number) => {
    return this.repository.find({ where: { profile: { id: profileId } } });
  };
}

export default VolunteerExperienceService;
