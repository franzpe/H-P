import React, { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { Routes } from '../constants/routes';
import { useUserQuery } from '../_generated/graphql.output';

const PrivateRoute: FC<RouteProps> = props => {
  const { loading, data } = useUserQuery();

  if (loading) return null;

  if (data) {
    return <Route {...props} />;
  } else {
    return <Redirect to={Routes.LOGIN} />;
  }
};

export default React.memo(PrivateRoute);
