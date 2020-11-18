import { MigrationInterface, QueryRunner } from 'typeorm';
import { createCurrencySeed } from '../modules/codelist/currency/currency.seed';
import { Currency } from '../modules/codelist/currency/currency.model';

export class seedCurrency1605358863447 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const currencies = createCurrencySeed();
    await Currency.save(currencies as Currency[]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
