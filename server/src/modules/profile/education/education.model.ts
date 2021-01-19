import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';
import { Lazy } from '../../../types/common';
import { Profile } from '../profile.model';
import { School } from '../../codelist/school/school.model';
import { Degree } from '../../codelist/degree/degree.model';

@ObjectType()
@Entity('education')
export class Education extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => School, school => school.id, { lazy: true })
  @Field(() => School)
  @JoinColumn()
  school: Lazy<School>;

  @ManyToOne(() => Degree, degree => degree.code, { lazy: true })
  @Field(() => Degree)
  @JoinColumn()
  degree: Lazy<Degree>;

  @Column()
  @Field()
  field: Date;

  @Column()
  @Field()
  startDate: Date;

  @Column({ nullable: true })
  @Field({ nullable: true })
  endDate?: Date;

  @Column({ nullable: true })
  @Field({ nullable: true })
  description?: string;

  @ManyToOne(() => Profile, profile => profile.experiences, { lazy: true })
  @Field(() => Profile)
  profile: Lazy<Profile>;
}
