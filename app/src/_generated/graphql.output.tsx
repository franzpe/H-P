import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  exampleQuery: Scalars['String'];
  me: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  profile: Profile;
};

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['Int'];
  basicSection: BasicSection;
};

export type BasicSection = {
  __typename?: 'BasicSection';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  revokeRefreshTokensForUser: Scalars['Boolean'];
  login: LoginResponse;
  logout: Scalars['Boolean'];
  register: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  resetPassword: Scalars['Boolean'];
  changeEmailRequest: Scalars['Boolean'];
  changeEmail: Scalars['Boolean'];
  changePassword: Scalars['Boolean'];
  updateUserBasicInfo: Scalars['Boolean'];
  updateBasicSection: Scalars['Boolean'];
};


export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['Int'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  data: ResetPasswordInput;
};


export type MutationChangeEmailRequestArgs = {
  email: Scalars['String'];
};


export type MutationChangeEmailArgs = {
  token: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationUpdateUserBasicInfoArgs = {
  data: UserBasicInfoUpdateInput;
};


export type MutationUpdateBasicSectionArgs = {
  data: BasicSectionInput;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: User;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ResetPasswordInput = {
  token: Scalars['String'];
  password: Scalars['String'];
};

export type ChangePasswordInput = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type UserBasicInfoUpdateInput = {
  name?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type BasicSectionInput = {
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type UpdateBasicSectionMutationVariables = Exact<{
  section: BasicSectionInput;
}>;


export type UpdateBasicSectionMutation = { __typename?: 'Mutation', updateBasicSection: boolean };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', accessToken: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: boolean };

export type ChangePasswordMutationVariables = Exact<{
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: boolean };

export type ChangeEmailRequestMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ChangeEmailRequestMutation = { __typename?: 'Mutation', changeEmailRequest: boolean };

export type ChangeEmailMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type ChangeEmailMutation = { __typename?: 'Mutation', changeEmail: boolean };

export type UpdateUserBasicInfoMutationVariables = Exact<{
  info: UserBasicInfoUpdateInput;
}>;


export type UpdateUserBasicInfoMutation = { __typename?: 'Mutation', updateUserBasicInfo: boolean };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', me: { __typename?: 'User', id: number, email: string } };

export type UserGeneralInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type UserGeneralInfoQuery = { __typename?: 'Query', me: { __typename?: 'User', email: string, name?: Maybe<string>, company?: Maybe<string>, location?: Maybe<string>, phoneNumber?: Maybe<string> } };


export const UpdateBasicSectionDocument = gql`
    mutation UpdateBasicSection($section: BasicSectionInput!) {
  updateBasicSection(data: $section)
}
    `;
export type UpdateBasicSectionMutationFn = ApolloReactCommon.MutationFunction<UpdateBasicSectionMutation, UpdateBasicSectionMutationVariables>;

/**
 * __useUpdateBasicSectionMutation__
 *
 * To run a mutation, you first call `useUpdateBasicSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBasicSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBasicSectionMutation, { data, loading, error }] = useUpdateBasicSectionMutation({
 *   variables: {
 *      section: // value for 'section'
 *   },
 * });
 */
export function useUpdateBasicSectionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateBasicSectionMutation, UpdateBasicSectionMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateBasicSectionMutation, UpdateBasicSectionMutationVariables>(UpdateBasicSectionDocument, baseOptions);
      }
export type UpdateBasicSectionMutationHookResult = ReturnType<typeof useUpdateBasicSectionMutation>;
export type UpdateBasicSectionMutationResult = ApolloReactCommon.MutationResult<UpdateBasicSectionMutation>;
export type UpdateBasicSectionMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateBasicSectionMutation, UpdateBasicSectionMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(data: {email: $email, password: $password}) {
    accessToken
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = ApolloReactCommon.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = ApolloReactCommon.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($token: String!, $password: String!) {
  resetPassword(data: {token: $token, password: $password})
}
    `;
export type ResetPasswordMutationFn = ApolloReactCommon.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, baseOptions);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = ApolloReactCommon.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($currentPassword: String!, $newPassword: String!) {
  changePassword(data: {currentPassword: $currentPassword, newPassword: $newPassword})
}
    `;
export type ChangePasswordMutationFn = ApolloReactCommon.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      currentPassword: // value for 'currentPassword'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = ApolloReactCommon.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ChangeEmailRequestDocument = gql`
    mutation ChangeEmailRequest($email: String!) {
  changeEmailRequest(email: $email)
}
    `;
export type ChangeEmailRequestMutationFn = ApolloReactCommon.MutationFunction<ChangeEmailRequestMutation, ChangeEmailRequestMutationVariables>;

/**
 * __useChangeEmailRequestMutation__
 *
 * To run a mutation, you first call `useChangeEmailRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeEmailRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeEmailRequestMutation, { data, loading, error }] = useChangeEmailRequestMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useChangeEmailRequestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeEmailRequestMutation, ChangeEmailRequestMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeEmailRequestMutation, ChangeEmailRequestMutationVariables>(ChangeEmailRequestDocument, baseOptions);
      }
export type ChangeEmailRequestMutationHookResult = ReturnType<typeof useChangeEmailRequestMutation>;
export type ChangeEmailRequestMutationResult = ApolloReactCommon.MutationResult<ChangeEmailRequestMutation>;
export type ChangeEmailRequestMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeEmailRequestMutation, ChangeEmailRequestMutationVariables>;
export const ChangeEmailDocument = gql`
    mutation ChangeEmail($token: String!) {
  changeEmail(token: $token)
}
    `;
export type ChangeEmailMutationFn = ApolloReactCommon.MutationFunction<ChangeEmailMutation, ChangeEmailMutationVariables>;

/**
 * __useChangeEmailMutation__
 *
 * To run a mutation, you first call `useChangeEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeEmailMutation, { data, loading, error }] = useChangeEmailMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useChangeEmailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeEmailMutation, ChangeEmailMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeEmailMutation, ChangeEmailMutationVariables>(ChangeEmailDocument, baseOptions);
      }
export type ChangeEmailMutationHookResult = ReturnType<typeof useChangeEmailMutation>;
export type ChangeEmailMutationResult = ApolloReactCommon.MutationResult<ChangeEmailMutation>;
export type ChangeEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeEmailMutation, ChangeEmailMutationVariables>;
export const UpdateUserBasicInfoDocument = gql`
    mutation UpdateUserBasicInfo($info: UserBasicInfoUpdateInput!) {
  updateUserBasicInfo(data: $info)
}
    `;
export type UpdateUserBasicInfoMutationFn = ApolloReactCommon.MutationFunction<UpdateUserBasicInfoMutation, UpdateUserBasicInfoMutationVariables>;

/**
 * __useUpdateUserBasicInfoMutation__
 *
 * To run a mutation, you first call `useUpdateUserBasicInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserBasicInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserBasicInfoMutation, { data, loading, error }] = useUpdateUserBasicInfoMutation({
 *   variables: {
 *      info: // value for 'info'
 *   },
 * });
 */
export function useUpdateUserBasicInfoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserBasicInfoMutation, UpdateUserBasicInfoMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUserBasicInfoMutation, UpdateUserBasicInfoMutationVariables>(UpdateUserBasicInfoDocument, baseOptions);
      }
export type UpdateUserBasicInfoMutationHookResult = ReturnType<typeof useUpdateUserBasicInfoMutation>;
export type UpdateUserBasicInfoMutationResult = ApolloReactCommon.MutationResult<UpdateUserBasicInfoMutation>;
export type UpdateUserBasicInfoMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserBasicInfoMutation, UpdateUserBasicInfoMutationVariables>;
export const UserDocument = gql`
    query User {
  me {
    id
    email
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>;
export const UserGeneralInfoDocument = gql`
    query UserGeneralInfo {
  me {
    email
    name
    company
    location
    phoneNumber
  }
}
    `;

/**
 * __useUserGeneralInfoQuery__
 *
 * To run a query within a React component, call `useUserGeneralInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserGeneralInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserGeneralInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserGeneralInfoQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserGeneralInfoQuery, UserGeneralInfoQueryVariables>) {
        return ApolloReactHooks.useQuery<UserGeneralInfoQuery, UserGeneralInfoQueryVariables>(UserGeneralInfoDocument, baseOptions);
      }
export function useUserGeneralInfoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserGeneralInfoQuery, UserGeneralInfoQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserGeneralInfoQuery, UserGeneralInfoQueryVariables>(UserGeneralInfoDocument, baseOptions);
        }
export type UserGeneralInfoQueryHookResult = ReturnType<typeof useUserGeneralInfoQuery>;
export type UserGeneralInfoLazyQueryHookResult = ReturnType<typeof useUserGeneralInfoLazyQuery>;
export type UserGeneralInfoQueryResult = ApolloReactCommon.QueryResult<UserGeneralInfoQuery, UserGeneralInfoQueryVariables>;