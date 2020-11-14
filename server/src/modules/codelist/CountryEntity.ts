import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, ManyToOne } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
@Entity('country')
export class Country extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  @Field()
  code: string;

  @Column('text')
  @Field()
  name: string;

  @Column('text')
  @Field({ nullable: true })
  capital: string;

  @Column('boolean')
  @Field({ defaultValue: false })
  isEU?: boolean;
}
