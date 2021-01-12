import { MigrationInterface, QueryRunner } from 'typeorm';
import { createCountrySeed } from '../modules/codelist/country/country.seed';
import { Country } from '../modules/codelist/country/country.model';

export class seedCountry1605358863448 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const countries = createCountrySeed();
    await Country.save(countries as Country[]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Country.query('DELETE from country');
  }
}
