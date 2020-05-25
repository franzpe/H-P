import searchRoutes from './search/routes';
import authRoutes from './auth/routes';
import { AuthResolver } from './auth/AuthResolver';
import { UserResolver } from './user/UserResolver';
import { NonEmptyArray } from 'type-graphql';

export const routes = [...authRoutes, ...searchRoutes];
export const resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [AuthResolver, UserResolver];
