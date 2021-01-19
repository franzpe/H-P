import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int, Root } from 'type-graphql';
import { Address } from '../common/address/address.model';
import { Lazy } from '../../types/common';
import { Company } from '../company/company.model';
import { Experience } from './experience/experience.model';
import { VolunteerExperience } from './volunteer/volunteerExperience.model';
import { Website } from './website/website.model';

@ObjectType()
@Entity('profile')
export class Profile extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  @Field({ nullable: true })
  firstName: string;

  @Column('varchar')
  @Field({ nullable: true })
  lastName: string;

  @OneToOne(() => Company, company => company.id, { lazy: true, nullable: true })
  @Field(() => Company, { nullable: true })
  @JoinColumn()
  company?: Lazy<Company>;

  @OneToOne(() => Address, address => address.id, { lazy: true })
  @Field(() => Address)
  @JoinColumn()
  address: Lazy<Address>;

  @Column('varchar')
  @Field({ nullable: true })
  phoneNumber?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  imgPathname?: string;

  @OneToMany(() => Experience, experience => experience.profile, { lazy: true, nullable: true })
  @Field(() => [Experience], { nullable: true })
  experiences?: Lazy<Experience[]>;

  @OneToMany(() => VolunteerExperience, volunteer => volunteer.profile, { lazy: true, nullable: true })
  @Field(() => [VolunteerExperience], { nullable: true })
  volunteerExperiences?: Lazy<VolunteerExperience[]>;

  @OneToMany(() => Website, website => website.url, { lazy: true, nullable: true })
  @Field(() => [Website], { nullable: true })
  websites?: Lazy<Website[]>;

  /**
   * Computed fields
   */
  @Field(() => String)
  fullName(@Root() profile: Profile) {
    return profile.firstName + ' ' + profile.lastName;
  }
}
