import { Resolver, Mutation, Arg, UseMiddleware } from 'type-graphql';
import { isAuth } from '../auth/auth';
import profileController from './ProfileController';
import { BasicSectionInput } from './profileTypes';

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
  async updateBasicSection(@Arg('data') data: BasicSectionInput) {
    return profileController.updateBasicSection(data);
  }
}
