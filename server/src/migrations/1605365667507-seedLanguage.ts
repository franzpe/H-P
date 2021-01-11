import { MigrationInterface, QueryRunner } from 'typeorm';
import { createLanguageSeed } from '../modules/codelist/language/language.seed';
import { Language } from '../modules/codelist/language/language.model';

export class seedLanguage1605365667507 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const countries: any[] = createLanguageSeed();
    await Language.save(countries as Language[]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Todo
  }
}
