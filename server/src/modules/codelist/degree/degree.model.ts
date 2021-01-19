import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('degree')
export class Degree extends BaseEntity {
  @Field()
  @PrimaryColumn()
  code: string;

  @Field()
  @Column()
  name: string;
}
