import { Query, Resolver, ObjectType, Field, Mutation, Arg, Ctx, Int, UseMiddleware } from 'type-graphql';
import { User } from '../user/UserEntity';
import authController from './authController';
import { Context } from '../../utils/Context';
import { ChangePasswordInput, LoginInput, RegisterInput, ResetPasswordInput } from './authTypes';
import { isAuth } from './auth';

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
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async revokeRefreshTokensForUser(@Arg('userId', () => Int) userId: number) {
    return authController.revokeRefreshTokens(userId);
  }

  @Mutation(() => LoginResponse)
  async login(@Arg('data') { email, password }: LoginInput, @Ctx() ctx: Context): Promise<LoginResponse> {
    return authController.login(email, password, ctx);
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async logout(@Ctx() { res }: Context) {
    return authController.logout(res);
  }

  @Mutation(() => Boolean)
  async register(@Arg('data') { email, password }: RegisterInput) {
    return authController.register(email, password);
  }

  @Mutation(() => Boolean)
  async forgotPassword(@Arg('email') email: string) {
    return authController.forgotPassword(email);
  }

  @Mutation(() => Boolean)
  async resetPassword(@Arg('data') { token, password }: ResetPasswordInput) {
    return authController.resetPassword(token, password);
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async changePassword(@Arg('data') { currentPassword, newPassword }: ChangePasswordInput, @Ctx() { payload } : Context) {
    return authController.changePassword(currentPassword, newPassword, payload!.userId);
  }
}
