import { Connection, createConnection } from 'typeorm';
import ormOptions from '../../config/orm';
import CodelistService from './codelist.service';
import { Country } from './country/country.model';
import { Currency } from './currency/currency.model';
import { Language } from './language/language.model';

describe('Codelists service', () => {
  let connection: Connection;
  let service: CodelistService;
  let mockLanguage: { find: jest.Mock<any, Language[]> };
  let mockCountry: { find: jest.Mock<any, Country[]> };
  let mockCurrency: { find: jest.Mock<any, Currency[]> };

  beforeAll(async () => {
    connection = await createConnection({ ...ormOptions, entities: [], name: 'testingConnection' });

    mockLanguage = {
      find: jest.fn()
    };

    mockCountry = {
      find: jest.fn()
    };

    mockCurrency = {
      find: jest.fn()
    };

    connection.getRepository = jest.fn().mockImplementation(target => {
      switch (target) {
        case Language: {
          return mockLanguage;
        }
        case Country: {
          return mockCountry;
        }
        case Currency: {
          return mockCurrency;
        }
        default: {
          return {};
        }
      }
    });

    service = new CodelistService(connection);
  });

  afterAll(() => connection.close());

  /**
   *
   * Test suites
   *
   */
  describe('Countries', () => {
    it('length should be zero', async () => {
      mockCountry.find.mockReturnValueOnce([]);
      const countries = await service.getAllCountries();
      expect(countries.length).toEqual(0);
    });

    it('length should be 1', async () => {
      mockCountry.find.mockReturnValueOnce([new Country()]);
      const countries = await service.getAllCountries();
      expect(countries.length).toEqual(1);
    });
  });

  describe('Languages', () => {
    it('length should be zero', async () => {
      mockLanguage.find.mockReturnValueOnce([]);
      const languages = await service.getAllLanguages();
      expect(languages.length).toEqual(0);
    });

    it('length should be 1', async () => {
      mockLanguage.find.mockReturnValueOnce([new Language()]);
      const languages = await service.getAllLanguages();
      expect(languages.length).toEqual(1);
    });
  });

  describe('Currencies', () => {
    it('length should be zero', async () => {
      mockCurrency.find.mockReturnValueOnce([]);
      const currencies = await service.getAllCurrencies();
      expect(currencies.length).toEqual(0);
    });

    it('length should be 1', async () => {
      mockCurrency.find.mockReturnValueOnce([new Currency()]);
      const currencies = await service.getAllCurrencies();
      expect(currencies.length).toEqual(1);
    });
  });
});
