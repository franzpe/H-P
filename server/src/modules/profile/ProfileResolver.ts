import { Resolver, Mutation, Arg, UseMiddleware } from 'type-graphql';
import { isAuth } from '../auth/auth';
import profileController from './ProfileController';

@Resolver()
export class ProfileResolver {
  /**
   * QUERIES
   */

  /**
   * MUTATIONS
   */
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async updateProfile() {
    return profileController.updateProfile({});
  }
}
