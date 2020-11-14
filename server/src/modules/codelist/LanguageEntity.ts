import { BaseEntity, Entity, Column, PrimaryColumn } from 'typeorm';
import { ObjectType } from 'type-graphql';

@ObjectType()
@Entity('language')
export class Language extends BaseEntity {
  @PrimaryColumn('varchar')
  code: string;

  @Column('text')
  name: string;
}
