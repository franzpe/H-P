import { inject, injectable } from 'tsyringe';
import { Resolver, Query } from 'type-graphql';
import { Company } from './company.model';
import CompanyService from './company.service';

@Resolver()
@injectable()
export class CompanyResolver {
  constructor(@inject(CompanyService) private service: CompanyService) {}

  /**
   * QUERIES
   */
  @Query(() => [Company])
  async companies() {
    return this.service.getAll();
  }
}
