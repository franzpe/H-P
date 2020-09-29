import { useLogoutMutation } from '../../_generated/graphql.output';
import { setAccessToken } from '../accessToken';

export const useLogout = () => {
  const [logoutMutation, { client }] = useLogoutMutation();

  const logout = async () => {
    await logoutMutation();
    client.clearStore();
    setAccessToken('');
  };

  return logout;
};
