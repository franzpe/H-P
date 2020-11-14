import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity('currency')
export class Currency extends BaseEntity {
  @PrimaryColumn('varchar')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  symbol: string;
}
