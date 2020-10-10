import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';
import { BasicSection } from './sections/BasicSectionEntity';

@ObjectType()
@Entity('profile')
export class Profile extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

	@OneToOne(type => BasicSection) 
	@JoinColumn()
	@Field()
	basicSection: BasicSection
}

