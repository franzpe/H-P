import { inject, injectable } from 'tsyringe';
import { Arg, Query, Resolver } from 'type-graphql';

import EducationService from './education.service';
import { Education } from './education.model';

@Resolver()
@injectable()
export class EducationResolver {
  constructor(@inject(EducationService) private service: EducationService) {}
  /**
   * QUERIES
   */
  @Query(() => [Education])
  experiences() {
    return this.service.getAll();
  }

  @Query(() => [Education])
  profileExperiences(@Arg('profileId') profileId: number) {
    return this.service.getAllByProfile(profileId);
  }

  /**
   * MUTATIONS
   */
}
