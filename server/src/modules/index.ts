import searchRoutes from './search/routes';
import authRoutes from './auth/routes';
import { AuthResolver } from './auth/AuthResolver';
import { UserResolver } from './user/UserResolver';
import { NonEmptyArray } from 'type-graphql';
import { ProfileResolver } from './profile/ProfileResolver';
import { CodelistResolver } from './codelist/CodelistResolver';

export const routes = [...authRoutes, ...searchRoutes];
export const resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
  AuthResolver,
  UserResolver,
  ProfileResolver,
  CodelistResolver
];
