import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Routes } from '../constants/routes';
import { useUserQuery } from '../_generated/graphql.output';

type Props = {
  component: React.FC<any> | React.ComponentClass<any>;
  path: string;
  exact?: boolean;
  strict?: boolean;
  redirectTo?: string;
};

const PrivateRoute: FC<Props> = props => {
  const { loading, data } = useUserQuery();

  if (loading) return null;

  if (data) {
    return <Route {...props} />;
  } else {
    return <Redirect to={Routes.LOGIN} />;
  }
};

export default React.memo(PrivateRoute);
