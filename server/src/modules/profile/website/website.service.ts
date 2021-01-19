import { inject, singleton } from 'tsyringe';
import { Connection, Repository } from 'typeorm';
import { Website } from './website.model';

@singleton()
export default class WebsiteService {
  private repository: Repository<Website>;

  constructor(@inject(Connection) connection: Connection) {
    this.repository = connection.getRepository(Website);
  }

  getAll = () => {
    return this.repository.find();
  };

  getAllByProfile = (profileId: number) => {
    return this.repository.find({ where: { profile: { id: profileId } } });
  };
}
