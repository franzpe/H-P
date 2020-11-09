import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Int, InputType } from 'type-graphql';

@ObjectType()
@InputType()
@Entity('basic_section')
export class BasicSection extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  @Field({ nullable: true })
  name: string;

  @Column('text')
  @Field({ nullable: true })
  company: string;

  @Column('text')
  @Field({ nullable: true })
  location: string;

  @Column('text')
  @Field({ nullable: true })
  phoneNumber?: string;
}
