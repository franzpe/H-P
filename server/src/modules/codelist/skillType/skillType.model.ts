import { BaseEntity, Entity, Column, PrimaryColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity('skillType')
export class SkillType extends BaseEntity {
  @Field()
  @PrimaryColumn({ type: 'char', length: 3 })
  type: string;

  @Field()
  @Column()
  name: string;
}
