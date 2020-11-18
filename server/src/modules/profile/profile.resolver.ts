import { inject, injectable } from 'tsyringe';
import { Resolver, Mutation, UseMiddleware } from 'type-graphql';
import { isAuth } from '../auth/auth';
import ProfileService from './profile.service';

@Resolver()
@injectable()
export class ProfileResolver {
  constructor(@inject(ProfileService) private profileService: ProfileService) {}

  /**
   * QUERIES
   */

  /**
   * MUTATIONS
   */
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async updateProfile() {
    return this.profileService.updateProfile({});
  }
}
