import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, ManyToOne } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
@Entity('country')
export class Country extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  code: string;

  @Column('text')
  name: string;

  @Column('text')
  @Field({ nullable: true })
  capital: string;

  @Column('boolean')
  @Field({ defaultValue: false })
  isEU?: boolean;
}
