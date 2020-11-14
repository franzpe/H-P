import { MigrationInterface, QueryRunner } from 'typeorm';
import { createCurrencySeed } from '../modules/codelist/currency.seed';
import { Currency } from '../modules/codelist/CurrencyEntity';

export class seedCurrency1605358863447 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const currencies = createCurrencySeed();
    await Currency.save(currencies as Currency[]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
