import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import PrivateRoute from '../components/PrivateRoute';

import { routes } from '../constants/routes';
import Dashboard from '../pages/Dashboard/Dashboard';
import LogIn from '../pages/Login/LogIn';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute exact={true} path={routes.DASHBOARD} component={Dashboard} />
        <Route path={routes.LOGIN} component={LogIn} />
      </Switch>
    );
  }
}

export default Routes;
