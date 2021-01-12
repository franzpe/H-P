import { MigrationInterface, QueryRunner } from 'typeorm';
import { Skill } from '../modules/codelist/skill/skill.model';
import { createSkillSeed } from '../modules/codelist/skill/skill.seed';
import { SkillType } from '../modules/codelist/skillType/skillType.model';
import { createSkillTypeSeed } from '../modules/codelist/skillType/skillType.seed';

export class seedSkills1610409794537 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const skillTypes = createSkillTypeSeed();
    await SkillType.save(skillTypes as SkillType[]);

    const skillsSeed = createSkillSeed();
    const skills = skillsSeed.map(json => Skill.create(json));

    await Skill.save(skills);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Skill.query('Delete from skill');
    await SkillType.query('Delete from skillType');
  }
}
