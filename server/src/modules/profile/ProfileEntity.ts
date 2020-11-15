import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';
import { Address } from '../common/address/AddressEntity';

@ObjectType()
@Entity('profile')
export class Profile extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  @Field({ nullable: true })
  name: string;

  @Column('varchar')
  @Field({ nullable: true })
  company: string;

  @OneToOne(() => Address)
  @JoinColumn()
  @Field({ nullable: true })
  address: Address;

  @Column('varchar')
  @Field({ nullable: true })
  phoneNumber?: string;
}
