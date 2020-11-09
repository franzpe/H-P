import { Query, Resolver, Ctx, UseMiddleware, Mutation, Arg } from 'type-graphql';
import { User } from './UserEntity';
import { Context } from '../../utils/Context';
import { isAuth } from '../auth/auth';
import userController from './userController';
import { UserBasicInfoUpdateInput } from './userTypes';

@Resolver()
export class UserResolver {
  /**
   * QUERIES
   */
  @Query(() => User)
  @UseMiddleware(isAuth)
  me(@Ctx() context: Context) {
    return userController.me(context.payload!.userId);
  }

  /**
   * MUTATIONS
   */
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async updateUserBasicInfo(@Arg('data') data: UserBasicInfoUpdateInput, @Ctx() { payload }: Context) {
    return userController.updateBasicInfo(data, payload!.userId);
  }
}
