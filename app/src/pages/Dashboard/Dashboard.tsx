import React, { Fragment } from 'react';
import { useHistory } from 'react-router';
import { routes } from '../../constants/routes';
import { useLogout } from '../../libs/auth/useLogout';

const Dashboard = () => {
  const logout = useLogout();
  const history = useHistory();

  const handleLogout = () => {
    logout().then(() => history.push(routes.LOGIN));
  };

  return (
    <Fragment>
      Dashboard
      <button
        type="submit"
        className="block w-full py-2 text-center font-medium text-white rounded-full bg-accent-orange hover:bg-accent-shade"
        onClick={handleLogout}
      >
        Log out
      </button>
    </Fragment>
  );
};

export default Dashboard;
