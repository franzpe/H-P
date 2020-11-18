import { inject, injectable } from 'tsyringe';
import { Resolver, Query } from 'type-graphql';
import CodelistService from './codelist.service';
import { Country } from './country/country.model';
import { Currency } from './currency/currency.model';
import { Language } from './language/language.model';

@Resolver()
@injectable()
export class CodelistResolver {
  constructor(@inject(CodelistService) private service: CodelistService) {}

  /**
   * QUERIES
   */
  @Query(() => [Currency])
  async currencies() {
    return this.service.getAllCurrencies();
  }

  @Query(() => [Language])
  languages() {
    return this.service.getAllLanguages();
  }

  @Query(() => [Country])
  countries() {
    return this.service.getAllCountries();
  }

  /**
   * MUTATIONS
   */
}
