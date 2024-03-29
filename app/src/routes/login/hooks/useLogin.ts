import { useLoginMutation } from '../../../_generated/graphql.output';
import { setAccessToken } from '../../../utils/accessToken';

export const useLogin = () => {
  const [loginMutation, result] = useLoginMutation();

  const login = async (email: string, password: string) => {
    return loginMutation({ variables: { email, password } }).then(({ data }) => {
      if (data) {
        setAccessToken(data.login.accessToken);
      }

      return !!data;
    });
  };

  return [login, result] as const;
};
