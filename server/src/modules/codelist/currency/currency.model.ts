import { BaseEntity, Entity, Column, PrimaryColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity('currency')
export class Currency extends BaseEntity {
  @Field()
  @PrimaryColumn('varchar')
  id: string;

  @Field()
  @Column('text')
  name: string;

  @Field()
  @Column('text')
  symbol: string;
}
