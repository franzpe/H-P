import React from 'react';
import { ApolloProvider } from '@apollo/client';
import useApolloClient from '../libs/apolloClient';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from '../constants/routes';
import Login from '../pages/Login/Login';
import PrivateRoute from '../components/PrivateRoute';
import App from './App';

function AppEntry() {
  const client = useApolloClient();

  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact={true} path={routes.LOGIN} component={Login} />
          <PrivateRoute path="/" component={App} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default AppEntry;
