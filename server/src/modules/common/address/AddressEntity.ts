import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { Country } from '../../codelist/CountryEntity';

@ObjectType()
@Entity('address')
export class Address extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('varchar', { nullable: true })
  street: string;

  @Field()
  @Column('varchar')
  city: string;

  @Field()
  @Column('varchar', { nullable: true })
  state: string;

  @Field()
  @Column('varchar', { nullable: true })
  postalCode: string;

  @ManyToOne(() => Country, type => type.id)
  @JoinColumn()
  @Field()
  country: Country;
}
