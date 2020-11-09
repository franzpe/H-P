import { Field, Int, InputType } from 'type-graphql';

@InputType()
export class BasicSectionInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  company: string;

  @Field({ nullable: true })
  location: string;

  @Field({ nullable: true })
  phoneNumber?: string;
}
