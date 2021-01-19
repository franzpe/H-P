import { inject, injectable } from 'tsyringe';
import { Arg, Query, Resolver } from 'type-graphql';

import { Website } from './website.model';
import WebsiteService from './website.service';

@Resolver()
@injectable()
export class WebsiteResolver {
  constructor(@inject(WebsiteService) private service: WebsiteService) {}
  /**
   * QUERIES
   */
  @Query(() => [Website])
  experiences() {
    return this.service.getAll();
  }

  @Query(() => [Website])
  profileExperiences(@Arg('profileId') profileId: number) {
    return this.service.getAllByProfile(profileId);
  }

  /**
   * MUTATIONS
   */
}
