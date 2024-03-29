import { BaseEntity, Entity, Column, PrimaryColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity('currency')
export class Currency extends BaseEntity {
  @Field()
  @PrimaryColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  symbol: string;
}
