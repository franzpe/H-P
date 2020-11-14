import { MigrationInterface, QueryRunner } from 'typeorm';
import { createCountrySeed } from '../modules/codelist/country.seed';
import { Country } from '../modules/codelist/CountryEntity';

export class seedCountry1605358863448 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const countries: any[] = createCountrySeed();

    await Country.save(countries as Country[]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Country.query('DELETE from country');
  }
}
