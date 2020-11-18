import { Query, Resolver, ObjectType, Field, Mutation, Arg, Ctx, Int, UseMiddleware } from 'type-graphql';
import { User } from '../user/user.model';
import { Context } from '../../utils/Context';
import { ChangePasswordInput, LoginInput, RegisterInput, ResetPasswordInput } from './auth.types';
import { isAuth } from './auth';
import { inject, injectable } from 'tsyringe';
import AuthService from './auth.service';

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;

  @Field(() => User)
  user: User;
}

@Resolver()
@injectable()
export class AuthResolver {
  constructor(@inject(AuthService) private authService: AuthService) {}
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
    return this.authService.revokeRefreshTokens(userId);
  }

  @Mutation(() => LoginResponse)
  async login(@Arg('data') { email, password }: LoginInput, @Ctx() ctx: Context): Promise<LoginResponse> {
    return this.authService.login(email, password, ctx);
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async logout(@Ctx() { res }: Context) {
    return this.authService.logout(res);
  }

  @Mutation(() => Boolean)
  async register(@Arg('data') { email, password }: RegisterInput) {
    return this.authService.register(email, password);
  }

  @Mutation(() => Boolean)
  async forgotPassword(@Arg('email') email: string) {
    return this.authService.forgotPassword(email);
  }

  @Mutation(() => Boolean)
  async resetPassword(@Arg('data') { token, password }: ResetPasswordInput) {
    return this.authService.resetPassword(token, password);
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async changeEmailRequest(@Arg('email') email: string, @Ctx() { payload }: Context) {
    return this.authService.changeEmailRequest(email, payload!.userId);
  }

  @Mutation(() => Boolean)
  async changeEmail(@Arg('token') token: string) {
    return this.authService.changeEmail(token);
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async changePassword(
    @Arg('data') { currentPassword, newPassword }: ChangePasswordInput,
    @Ctx() { payload }: Context
  ) {
    return this.authService.changePassword(currentPassword, newPassword, payload!.userId);
  }
}
