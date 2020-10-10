import { Field, InputType } from 'type-graphql';
import { IsEmail } from 'class-validator';
import { IsEmailAlreadyExists } from '../../utils/validations/isEmailAlreadyExists';

@InputType()
export class RegisterInput {
  @Field()
  @IsEmail()
  @IsEmailAlreadyExists({ message: 'email already in use' })
  email: string;

  @Field()
  password: string;
}

@InputType()
export class LoginInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}

@InputType()
export class ResetPasswordInput {
  @Field()
  token: string;

  @Field()
  password: string;
}

@InputType()
export class ChangePasswordInput {
  @Field()
  currentPassword: string;

  @Field()
  newPassword: string
}