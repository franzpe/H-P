import { inject, injectable } from 'tsyringe';
import { Arg, Query, Resolver } from 'type-graphql';

import { Experience } from './experience.model';
import ExperienceService from './experience.service';

@Resolver()
@injectable()
export class ExperienceResolver {
  constructor(@inject(ExperienceService) private service: ExperienceService) {}
  /**
   * QUERIES
   */
  @Query(() => [Experience])
  experiences() {
    return this.service.getAll();
  }

  @Query(() => [Experience])
  profileExperiences(@Arg('profileId') profileId: number) {
    return this.service.getAllByProfile(profileId);
  }

  /**
   * MUTATIONS
   */
}
