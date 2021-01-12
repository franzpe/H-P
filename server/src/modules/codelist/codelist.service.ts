import { inject, singleton } from 'tsyringe';

import { Connection, Repository } from 'typeorm';
import { Country } from './country/country.model';
import { Currency } from './currency/currency.model';
import { Employment } from './employment/employment.model';
import { Language } from './language/language.model';
import { Skill } from './skill/skill.model';

@singleton()
class CodelistService {
  private countryRepository: Repository<Country>;
  private languageRepository: Repository<Language>;
  private currencyRepository: Repository<Currency>;
  private skillRepository: Repository<Skill>;
  private employmentRepository: Repository<Employment>;

  constructor(@inject(Connection) connection: Connection) {
    this.countryRepository = connection.getRepository(Country);
    this.languageRepository = connection.getRepository(Language);
    this.currencyRepository = connection.getRepository(Currency);
    this.skillRepository = connection.getRepository(Skill);
    this.employmentRepository = connection.getRepository(Employment);
  }

  getAllCountries = () => {
    return this.countryRepository.find();
  };

  getAllLanguages = () => {
    return this.languageRepository.find();
  };

  getAllCurrencies = () => {
    return this.currencyRepository.find();
  };

  getAllSkills = () => {
    return this.skillRepository.find();
  };

  getAllEmploymentTypes = () => {
    return this.employmentRepository.find();
  };
}

export default CodelistService;
