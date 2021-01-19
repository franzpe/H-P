import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Lazy } from '../../../types/common';
import { Profile } from '../profile.model';

@ObjectType()
@Entity('website')
export class Website extends BaseEntity {
  @Field()
  @PrimaryColumn()
  url: string;

  @ManyToOne(() => Profile, profile => profile.websites, { lazy: true })
  @Field(() => Profile)
  profile: Lazy<Profile>;
}
