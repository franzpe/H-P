import { MigrationInterface, QueryRunner } from 'typeorm';
import { Degree } from '../modules/codelist/degree/degree.model';
import { createDegreeSeed } from '../modules/codelist/degree/degree.seed';

export class seedDegrees1611054752725 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const seed = createDegreeSeed();
    await Degree.save(seed as Degree[]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
