import { inject, singleton } from 'tsyringe';

import { Connection, Repository } from 'typeorm';
import { Country } from './country/country.model';
import { Currency } from './currency/currency.model';
import { Language } from './language/language.model';

@singleton()
class CodelistService {
  private countryRepository: Repository<Country>;
  private languageRepository: Repository<Language>;
  private currencyRepository: Repository<Currency>;

  constructor(@inject(Connection) connection: Connection) {
    this.countryRepository = connection.getRepository(Country);
    this.languageRepository = connection.getRepository(Language);
    this.currencyRepository = connection.getRepository(Currency);
  }

  getAllCountries = () => {
    return this.countryRepository.find();
  };

  getAllLanguages = () => {
    return this.languageRepository.find();
  };

  getAllCurrencies = async () => {
    return this.currencyRepository.find();
  };
}

export default CodelistService;
