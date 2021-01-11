import { MigrationInterface, QueryRunner } from 'typeorm';
import { createUserSeed } from '../modules/user/user.seed';
import { User } from '../modules/user/user.model';

export class seedUsers1602351906518 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const usersSeed = await createUserSeed();
    await User.save(usersSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Todo
  }
}
