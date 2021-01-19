import { inject, injectable } from 'tsyringe';
import { Arg, Query, Resolver } from 'type-graphql';
import { VolunteerExperience } from './volunteerExperience.model';

import VolunteerExperienceService from './volunteerExperience.service';

@Resolver()
@injectable()
export class VolunteerExperienceResolver {
  constructor(@inject(VolunteerExperienceService) private service: VolunteerExperienceService) {}
  /**
   * QUERIES
   */
  @Query(() => [VolunteerExperience])
  volunteerExperiences() {
    return this.service.getAll();
  }

  @Query(() => [VolunteerExperience])
  profileVolunteerExperiences(@Arg('profileId') profileId: number) {
    return this.service.getAllByProfile(profileId);
  }

  /**
   * MUTATIONS
   */
}
