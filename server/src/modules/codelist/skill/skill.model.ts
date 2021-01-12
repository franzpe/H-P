import { BaseEntity, Entity, Column, PrimaryColumn, JoinColumn, OneToOne, ManyToOne } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { SkillType } from '../skillType/skillType.model';
import { Lazy } from '../../../types/common';

@ObjectType()
@Entity('skill')
export class Skill extends BaseEntity {
  @Field()
  @PrimaryColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @Field(() => SkillType, { name: 'skillType' })
  @ManyToOne(() => SkillType, skillType => skillType.type, { lazy: true })
  @JoinColumn({ name: 'type' })
  type: Lazy<SkillType>;

  @Field({ nullable: true })
  @Column({ nullable: true })
  imgPathname?: string;
}
