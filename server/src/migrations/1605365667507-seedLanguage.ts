import { MigrationInterface, QueryRunner } from 'typeorm';
import { createLanguageSeed } from '../modules/codelist/language.seed';
import { Language } from '../modules/codelist/LanguageEntity';

export class seedLanguage1605365667507 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const countries: any[] = createLanguageSeed();
    await Language.save(countries as Language[]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
