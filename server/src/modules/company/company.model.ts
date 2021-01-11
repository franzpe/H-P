import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
@Entity('company')
export class Company extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  @Field()
  name: string;

  @Column('varchar')
  @Field()
  imgPathname: string;
}
