import { MigrationInterface, QueryRunner } from 'typeorm';
import { Employment } from '../modules/codelist/employment/employment.model';
import { createEmploymentSeed } from '../modules/codelist/employment/employment.seed';

export class seedEmployment1610466498767 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const seed = createEmploymentSeed();
    await Employment.save(seed as Employment[]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
