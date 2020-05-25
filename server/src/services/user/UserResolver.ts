import { Query, Resolver, ObjectType, Field, Mutation, Arg, Ctx, UseMiddleware } from 'type-graphql';
import { User } from '../user/UserEntity';
import { Context } from '../../utils/Context';
import { isAuth } from '../auth/auth';
import userController from './userController';

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
}
