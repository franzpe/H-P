import { Resolver, Mutation, Arg, Query } from 'type-graphql';
import controller from './CodelistController';
import { Country } from './CountryEntity';
import { Currency } from './CurrencyEntity';
import { Language } from './LanguageEntity';

@Resolver()
export class CodelistResolver {
  /**
   * QUERIES
   */
  @Query(() => [Currency])
  currencies() {
    return controller.getAllCurrencies();
  }

  @Query(() => [Language])
  languages() {
    return controller.getAllLanguages();
  }

  @Query(() => [Country])
  countries() {
    return controller.getAllCountries();
  }

  /**
   * MUTATIONS
   */
}
