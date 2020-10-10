import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
@Entity('basic_section')
export class BasicSection extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  @Field()
  Name: string;

  @Column('text')
  @Field()
	Company: string;

  @Column('text')
  @Field()
	Location: string;
	
  @Column('text')
  @Field()
	PhoneNumber: string;
}
