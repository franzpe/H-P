import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';
import { Lazy } from '../../../types/common';
import { Company } from '../../company/company.model';
import { Profile } from '../profile.model';

@ObjectType()
@Entity('volunteerExperience')
export class VolunteerExperience extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field()
  title: string;

  @ManyToOne(() => Company, company => company.id, { lazy: true })
  @Field(() => Company)
  @JoinColumn()
  company: Lazy<Company>;

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
}
