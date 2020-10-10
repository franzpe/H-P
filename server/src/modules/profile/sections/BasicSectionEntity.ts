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
  name: string;

  @Column('text')
  @Field()
  company: string;

  @Column('text')
  @Field()
  location: string;

  @Column('text')
  @Field()
  phoneNumber: string;
}
