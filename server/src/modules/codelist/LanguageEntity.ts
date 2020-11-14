import { BaseEntity, Entity, Column, PrimaryColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity('language')
export class Language extends BaseEntity {
  @Field()
  @PrimaryColumn('varchar')
  code: string;

  @Field()
  @Column('text')
  name: string;
}
