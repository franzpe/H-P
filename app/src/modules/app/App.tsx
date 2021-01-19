import React from 'react';
import { ApolloProvider } from '@apollo/client';

import Routes from 'routes';
import useApolloClient from '../../utils/apolloClient';

const App = () => {
  const client = useApolloClient();

  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
};

export default App;
