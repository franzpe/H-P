import { container } from 'tsyringe';

import searchRoutes from './search/routes';
import { AuthResolver } from './auth/auth.resolver';
import { UserResolver } from './user/user.resolver';
import { NonEmptyArray } from 'type-graphql';
import { CodelistResolver } from './codelist/codelist.resolver';
import { CompanyResolver } from './company/company.resolver';
import AuthRouter from './auth/auth.router';
import { ExperienceResolver } from './profile/experience/experience.resolver';
import profileResolvers from './profile';

export const routes = () => {
  const authRouter = container.resolve(AuthRouter);

  return [...authRouter.getRoutes(), ...searchRoutes];
};

export const resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
  ...profileResolvers,
  AuthResolver,
  UserResolver,
  ExperienceResolver,
  CodelistResolver,
  CompanyResolver
];
