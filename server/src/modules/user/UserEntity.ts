import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';
import { Profile } from '../profile/ProfileEntity';

@ObjectType()
@Entity('users')
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  @Field()
  email: string;

  @Column('text')
  password: string;

  @Column({ type: 'text', nullable: true })
  resetPasswordToken: string;

  @Column({ nullable: true })
  resetPasswordExpires: Date;

  @Column('int', { default: 0 })
  tokenVersion: number;

  @OneToOne(type => Profile) 
  @JoinColumn()
  @Field()
	profile: Profile
}
