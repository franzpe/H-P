import { inject, injectable } from 'tsyringe';
import { Resolver, Query } from 'type-graphql';
import CodelistService from './codelist.service';
import { Country } from './country/country.model';
import { Currency } from './currency/currency.model';
import { Employment } from './employment/employment.model';
import { Language } from './language/language.model';
import { Skill } from './skill/skill.model';

@Resolver()
@injectable()
export class CodelistResolver {
  constructor(@inject(CodelistService) private service: CodelistService) {}

  /**
   * QUERIES
   */
  @Query(() => [Currency])
  currencies() {
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

  @Query(() => [Skill])
  skills() {
    return this.service.getAllSkills();
  }

  @Query(() => [Employment])
  employmentTypes() {
    return this.service.getAllEmploymentTypes();
  }

  @Query(() => [Employment])
  schools() {
    return this.service.getAllSchools();
  }

  @Query(() => [Employment])
  degrees() {
    return this.service.getAllDegrees();
  }
  /**
   * MUTATIONS
   */
}
