import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import PrivateRoute from '../components/PrivateRoute';

import { Routes as routes } from 'constants/routes';
import NotFoundPage from 'pages/404';
import Dashboard from 'pages/Dashboard/Dashboard';
import NetworkErrorPage from 'pages/NetworkErrorPage';

const Account = lazy(() => import(/* webpackChunkName: "AccountPage" */ 'pages/Account/AccountPage'));

class Routes extends Component {
  render() {
    return (
      <Suspense fallback={<div />}>
        <Switch>
          <PrivateRoute exact={true} path={routes.DASHBOARD} component={Dashboard} />
          <PrivateRoute path={routes.ACCOUNT} component={Account} />
          <Route path={routes.NETWORK_ERROR} component={NetworkErrorPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    );
  }
}

export default Routes;
