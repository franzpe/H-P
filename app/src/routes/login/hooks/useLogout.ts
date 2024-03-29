import { useHistory } from 'react-router';

import { Routes } from '../../../constants/routes';
import { useLogoutMutation } from '../../../_generated/graphql.output';
import { setAccessToken } from '../../../utils/accessToken';

export const useLogout = () => {
  const [logoutMutation, { client }] = useLogoutMutation();
  const history = useHistory();

  const logout = async () => {
    await logoutMutation();
    client.clearStore();
    setAccessToken('');
    history.push(Routes.LOGIN);
  };

  return logout;
};
