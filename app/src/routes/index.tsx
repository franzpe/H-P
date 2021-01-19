import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';

import { Routes as routes } from 'constants/routes';
import NotFoundPage from 'routes/misc/404';
import Dashboard from 'routes/dashboard/Dashboard';
import NetworkErrorPage from 'routes/misc/NetworkErrorPage';
import Layout from 'modules/app/Layout';

import PrivateRoute from '../components/privateRoute/PrivateRoute';
import Login from './login/Login';

const Account = lazy(() => import(/* webpackChunkName: "AccountPage" */ 'routes/account'));
const ForgotPassword = lazy(
  () => import(/* webpackChunkName: "AccountPage" */ 'routes/forgotten-password/ForgotPassword')
);
const ResetPassword = lazy(
  () => import(/* webpackChunkName: "AccountPage" */ 'routes/forgotten-password/ResetPassword')
);
const ChangeEmail = lazy(
  () => import(/* webpackChunkName: "AccountPage" */ 'routes/change-email/ChangeEmailVerification')
);

const Routes = () => {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path={routes.LOGIN} component={Login} />
        <Route exact path={routes.FORGOT_PASSWORD} component={ForgotPassword} />
        <Route path={routes.CHANGE_EMAIL_VERIFICATION} component={ChangeEmail} />
        <Route path={routes.RESET_PASSWORD} component={ResetPassword} />
        <PrivateRoute>
          <Layout>
            <Switch>
              <Route exact path={routes.DASHBOARD} component={Dashboard} />
              <Route path={routes.ACCOUNT} component={Account} />
              <Route path={routes.NETWORK_ERROR} component={NetworkErrorPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Layout>
        </PrivateRoute>
      </Switch>
    </Suspense>
  );
};

export default Routes;
