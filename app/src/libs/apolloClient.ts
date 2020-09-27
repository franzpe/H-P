import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { ACCESS_TOKEN_NAME } from './auth/hooks';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
  credentials: 'include'
});

const getNewToken = () => {
  // TODO GET NEW TOKEN

  return '';
};

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, extensions }) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${extensions?.code}`);
      switch (extensions?.code) {
        case 'UNAUTHENTICATED':
          const headers = operation.getContext().headers;
          operation.setContext({
            headers: {
              ...headers,
              authorization: getNewToken()
            }
          });

          return forward(operation);
      }
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    // TODO REDIRECT TO NETWORK PAGE
  }
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(ACCESS_TOKEN_NAME);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache()
});

export default client;
