import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int, Root } from 'type-graphql';
import { Address } from '../common/address/AddressEntity';
import { Lazy } from '../../utils';

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

  @Column('varchar')
  @Field({ nullable: true })
  company: string;

  @OneToOne(type => Address, address => address.id, { lazy: true })
  @Field(type => Address)
  @JoinColumn()
  address: Lazy<Address>;

  @Column('varchar')
  @Field({ nullable: true })
  phoneNumber?: string;

  /**
   * Computed fields
   */
  @Field(() => String)
  fullName(@Root() profile: Profile) {
    return profile.firstName + ' ' + profile.lastName;
  }
}
