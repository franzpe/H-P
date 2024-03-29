import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';
import { Profile } from '../profile/profile.model';
import { Lazy } from '../../types/common';

@ObjectType()
@Entity('users')
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field()
  email: string;

  @Column({ nullable: true })
  changeEmail: string;

  @Column({ nullable: true })
  changeEmailToken: string;

  @Column({ nullable: true })
  changeEmailExpires: Date;

  @Column()
  password: string;

  @Column({ nullable: true })
  resetPasswordToken: string;

  @Column({ nullable: true })
  resetPasswordExpires: Date;

  @Column('int', { default: 0 })
  tokenVersion: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  company: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  location: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  phoneNumber: string;

  @OneToOne(() => Profile, { lazy: true, nullable: true })
  @JoinColumn()
  @Field(() => Profile, { nullable: true })
  profile?: Lazy<Profile>;
}
