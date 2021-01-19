import { inject, singleton } from 'tsyringe';

import { Connection, Repository } from 'typeorm';
import { Country } from './country/country.model';
import { Currency } from './currency/currency.model';
import { Degree } from './degree/degree.model';
import { Employment } from './employment/employment.model';
import { Language } from './language/language.model';
import { School } from './school/school.model';
import { Skill } from './skill/skill.model';

@singleton()
class CodelistService {
  private countryRepository: Repository<Country>;
  private languageRepository: Repository<Language>;
  private currencyRepository: Repository<Currency>;
  private skillRepository: Repository<Skill>;
  private employmentRepository: Repository<Employment>;
  private schoolRepository: Repository<School>;
  private degreeRepository: Repository<Degree>;

  constructor(@inject(Connection) connection: Connection) {
    this.countryRepository = connection.getRepository(Country);
    this.languageRepository = connection.getRepository(Language);
    this.currencyRepository = connection.getRepository(Currency);
    this.skillRepository = connection.getRepository(Skill);
    this.employmentRepository = connection.getRepository(Employment);
    this.schoolRepository = connection.getRepository(School);
    this.degreeRepository = connection.getRepository(Degree);
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

  getAllSchools = () => {
    return this.schoolRepository.find();
  };

  getAllDegrees = () => {
    return this.degreeRepository.find();
  };
}

export default CodelistService;
