import { Field, InputType } from 'type-graphql';

@InputType()
export class UserBasicInfoUpdateInput {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  company: string;

  @Field({ nullable: true })
  location: string;

  @Field({ nullable: true })
  phoneNumber?: string;
}
