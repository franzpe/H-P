import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import PrivateRoute from '../components/PrivateRoute';

import { routes } from '../constants/routes';
import NotFoundPage from '../pages/404';
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from '../pages/Login/Login';
import NetworkErrorPage from '../pages/NetworkErrorPage';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute exact={true} path={routes.DASHBOARD} component={Dashboard} />
        <Route path={routes.LOGIN} component={Login} />
        <Route path={routes.NETWORK_ERROR} component={NetworkErrorPage} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
