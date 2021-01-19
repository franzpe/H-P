import { Education } from './education/education.model';
import { ExperienceResolver } from './experience/experience.resolver';
import { ProfileResolver } from './profile.resolver';
import { VolunteerExperienceResolver } from './volunteer/volunteerExperience.resolver';
import { WebsiteResolver } from './website/website.resolver';

export default [
  ProfileResolver,
  ExperienceResolver,
  VolunteerExperienceResolver,
  WebsiteResolver,
  Education
] as const;
