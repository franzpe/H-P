import { container } from 'tsyringe';

import searchRoutes from './search/routes';
import { AuthResolver } from './auth/auth.resolver';
import { UserResolver } from './user/user.resolver';
import { NonEmptyArray } from 'type-graphql';
import { ProfileResolver } from './profile/profile.resolver';
import { CodelistResolver } from './codelist/codelist.resolver';
import { CompanyResolver } from './company/company.resolver';
import AuthRouter from './auth/auth.router';

export const routes = () => {
  const authRouter = container.resolve(AuthRouter);

  return [...authRouter.getRoutes(), ...searchRoutes];
};

export const resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
  AuthResolver,
  UserResolver,
  ProfileResolver,
  CodelistResolver,
  CompanyResolver
];
