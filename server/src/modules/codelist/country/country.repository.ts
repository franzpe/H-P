import { EntityRepository, Repository } from 'typeorm';
import { Country } from './country.model';

@EntityRepository(Country)
export class CountryRepository extends Repository<Country> {
  findbyWhatever() {
    return '';
  }
}
