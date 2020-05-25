import { Query, Resolver, ObjectType, Field, Mutation, Arg, Ctx } from 'type-graphql';
import { User } from '../user/UserEntity';
import authController from './authController';
import { Context } from '../../utils/Context';
import { LoginInput, RegisterInput } from './authTypes';

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;

  @Field(() => User)
  user: User;
}

@Resolver()
export class AuthResolver {
  /**
   * QUERIES
   */
  @Query(() => String)
  exampleQuery() {
    return 'This is just for thest purposes';
  }

  /**
   * MUTATIONS
   */
  @Mutation(() => LoginResponse)
  async login(@Arg('data') { email, password }: LoginInput, @Ctx() ctx: Context): Promise<LoginResponse> {
    return authController.login(email, password, ctx);
  }

  @Mutation(() => Boolean)
  async register(@Arg('data') { email, password }: RegisterInput) {
    return authController.register(email, password);
  }
}
