import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int, Root } from 'type-graphql';
import { Lazy } from '../../../../types/common';
import { Company } from '../../../company/company.model';
import { Employment } from '../../../codelist/employment/employment.model';
import { monthDiff } from '../../../../utils/date';
import { Profile } from '../../profile.model';

@ObjectType()
@Entity('experience')
export class Experience extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field()
  title: string;

  @ManyToOne(type => Company, company => company.id, { lazy: true })
  @Field(type => Company)
  @JoinColumn()
  company: Lazy<Company>;

  @ManyToOne(type => Employment, employment => employment.type, { lazy: true })
  @Field(type => Employment)
  @JoinColumn()
  employment: Lazy<Employment>;

  @Column()
  @Field()
  startDate: Date;

  @Column({ nullable: true })
  @Field({ nullable: true })
  endDate?: Date;

  @Column({ nullable: true })
  @Field({ nullable: true })
  description?: string;

  @ManyToOne(() => Profile, profile => profile.experiences, { lazy: true })
  @Field(() => Profile)
  profile: Lazy<Profile>;

  /**
   * Computed fields
   */

  /**
   * Returns duration in months of employment
   *
   * @param experience - root
   */
  @Field(() => Int)
  duration(@Root() experience: Experience) {
    let endDate = experience.endDate || new Date();
    return monthDiff(experience.startDate, endDate);
  }
}
