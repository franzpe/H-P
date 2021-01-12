import { BaseEntity, Entity, Column, PrimaryColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity('employment')
export class Employment extends BaseEntity {
  @Field()
  @PrimaryColumn({ type: 'char', length: 3 })
  type: string;

  @Field()
  @Column()
  name: string;
}
