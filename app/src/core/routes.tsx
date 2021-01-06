import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';

import { Routes as routes } from 'constants/routes';
import NotFoundPage from 'pages/404';
import Dashboard from 'pages/Dashboard/Dashboard';
import NetworkErrorPage from 'pages/NetworkErrorPage';
import PrivateRoute from '../components/PrivateRoute';

const Account = lazy(() => import(/* webpackChunkName: "AccountPage" */ 'pages/Account/AccountPage'));

const Routes = () => {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        <PrivateRoute exact path={routes.DASHBOARD} component={Dashboard} />
        <PrivateRoute path={routes.ACCOUNT} component={Account} />
        <Route path={routes.NETWORK_ERROR} component={NetworkErrorPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
