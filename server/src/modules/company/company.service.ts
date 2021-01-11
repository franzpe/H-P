import { inject, singleton } from 'tsyringe';

import { Connection, Repository } from 'typeorm';
import { Company } from './company.model';

@singleton()
class CompanyService {
  private companyRepository: Repository<Company>;

  constructor(@inject(Connection) connection: Connection) {
    this.companyRepository = connection.getRepository(Company);
  }

  getAll = () => {
    return this.companyRepository.find();
  };
}

export default CompanyService;
