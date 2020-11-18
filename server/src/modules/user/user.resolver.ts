import { Query, Resolver, Ctx, UseMiddleware, Mutation, Arg } from 'type-graphql';
import { User } from './user.model';
import { Context } from '../../utils/Context';
import { isAuth } from '../auth/auth';
import { UserBasicInfoUpdateInput } from './user.types';
import { inject, injectable } from 'tsyringe';
import UserService from './user.service';

@Resolver()
@injectable()
export class UserResolver {
  constructor(@inject(UserService) private userService: UserService) {}
  /**
   * QUERIES
   */
  @Query(() => User)
  @UseMiddleware(isAuth)
  me(@Ctx() context: Context) {
    return this.userService.me(context.payload!.userId);
  }

  /**
   * MUTATIONS
   */
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async updateUserBasicInfo(@Arg('data') data: UserBasicInfoUpdateInput, @Ctx() { payload }: Context) {
    return this.userService.updateBasicInfo(data, payload!.userId);
  }
}
