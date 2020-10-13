import React, { lazy, Suspense } from 'react';
import { ApolloProvider } from '@apollo/client';
import useApolloClient from '../libs/apolloClient';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from '../constants/routes';
import LoginPage from '../pages/Login/LoginPage';
import PrivateRoute from '../components/PrivateRoute';
import App from './App';

const ForgotPassword = lazy(() => import(/* webpackChunkName: "AccountPage" */ 'pages/ForgotPassword'));
const ResetPassword = lazy(() => import(/* webpackChunkName: "AccountPage" */ 'pages/ResetPassword'));
const ChangeEmail = lazy(() => import(/* webpackChunkName: "AccountPage" */ 'pages/ChangeEmailVerification'));

function AppEntry() {
  const client = useApolloClient();

  return (
    <ApolloProvider client={client}>
      <Suspense fallback={<div />}>
        <Router>
          <Switch>
            <Route exact={true} path={Routes.LOGIN} component={LoginPage} />
            <Route exact={true} path={Routes.FORGOT_PASSWORD} component={ForgotPassword} />
            <Route path={Routes.CHANGE_EMAIL_VERIFICATION} component={ChangeEmail} />
            <Route path={Routes.RESET_PASSWORD} component={ResetPassword} />
            <PrivateRoute path="/" component={App} />
          </Switch>
        </Router>
      </Suspense>
    </ApolloProvider>
  );
}

export default AppEntry;
