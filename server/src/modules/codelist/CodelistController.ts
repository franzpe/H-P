import { getConnection } from 'typeorm';
import { Country } from './CountryEntity';
import { Currency } from './CurrencyEntity';
import { Language } from './LanguageEntity';

const getAllCountries = () => {
  return Country.createQueryBuilder().getMany();
};

const getAllLanguages = () => {
  return Language.createQueryBuilder().getMany();
};

const getAllCurrencies = () => {
  return Currency.createQueryBuilder().getMany();
};

export default { getAllCountries, getAllLanguages, getAllCurrencies };
