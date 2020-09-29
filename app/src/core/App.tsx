import React from 'react';
import Routes from './routes';
import { ApolloProvider } from '@apollo/client';
import useApolloClient from '../libs/apolloClient';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const client = useApolloClient();

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          Hackers & Painters
          <Routes />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
