import { inject, singleton } from 'tsyringe';
import { Connection, Repository } from 'typeorm';
import { Education } from './education.model';

@singleton()
class EducationService {
  private repository: Repository<Education>;

  constructor(@inject(Connection) connection: Connection) {
    this.repository = connection.getRepository(Education);
  }

  getAll = () => {
    return this.repository.find();
  };

  getAllByProfile = async (profileId: number) => {
    return this.repository.find({ where: { profile: { id: profileId } } });
  };
}

export default EducationService;
