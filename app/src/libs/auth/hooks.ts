import { useLoginMutation, useLogoutMutation } from '../../_generated/graphql.output';

export const ACCESS_TOKEN_NAME = 'token';

export const useLogin = () => {
  const [loginMutation, result] = useLoginMutation({ errorPolicy: 'ignore' });

  const login = async (email: string, password: string) => {
    return loginMutation({ variables: { email, password } }).then(({ data }) => {
      if (data) {
        localStorage.setItem(ACCESS_TOKEN_NAME, data.login.accessToken);
      }

      return !!data;
    });
  };

  return [login, result] as const;
};

export const useLogout = () => {
  const [logoutMutation] = useLogoutMutation();

  const logout = async () => {
    await logoutMutation();
    localStorage.removeItem(ACCESS_TOKEN_NAME);
  };

  return logout;
};
