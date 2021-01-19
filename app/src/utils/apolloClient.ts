/* eslint no-loop-func: 0, import/no-extraneous-dependencies: 0, no-restricted-syntax: 0, consistent-return: 0, no-console: 0 */
import { ApolloClient, ApolloLink, createHttpLink, fromPromise, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { useHistory } from 'react-router';
import { History } from 'history';

import { getAccessToken, setAccessToken } from './accessToken';
import { Routes } from '../constants/routes';

const ORIGIN = 'http://localhost:3001';

const httpLink = createHttpLink({
  uri: `${ORIGIN}/graphql`,
  credentials: 'include'
});

let isRefreshing = false;
let pendingRequests: any[] = [];

const resolvePendingRequests = () => {
  pendingRequests.map(callback => callback());
  pendingRequests = [];
};

const errorLink = (history: History<unknown>) =>
  onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (const { extensions } of graphQLErrors) {
        if (extensions?.code === 'UNAUTHENTICATED') {
          let forward$;

          if (!isRefreshing) {
            isRefreshing = true;

            forward$ = fromPromise(
              fetch(`${ORIGIN}/api/v1/refresh_token`, { method: 'GET', credentials: 'include' })
                .then(res => res.json())
                .then(({ accessToken }) => {
                  setAccessToken(accessToken);
                  resolvePendingRequests();
                  return accessToken;
                })
                .catch(() => {
                  // invalid or missing refresh token
                  pendingRequests = []; // eslint-disable-next-line no-loop-func
                  console.log('Refresh token invalid');
                  history.push(Routes.DASHBOARD);
                  return null;
                })
                .finally(() => {
                  isRefreshing = false;
                })
            ).filter(value => Boolean(value));
          } else {
            forward$ = fromPromise(
              new Promise(resolve => {
                pendingRequests.push(() => resolve(true));
              })
            );
          }

          return forward$.flatMap(() => forward(operation));
        }
      }
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
      history.push(Routes.NETWORK_ERROR);
    }
  });

const authLink = setContext((_, { headers }) => {
  // get the authentication token from memory if it exists
  const token = getAccessToken();
  console.log(token);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const useApolloClient = () => {
  const history = useHistory();

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink(history), authLink, httpLink]),
    cache: new InMemoryCache()
  });

  return client;
};

export default useApolloClient;
