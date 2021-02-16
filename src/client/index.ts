import { ApolloClient, InMemoryCache } from '@apollo/client';
import { host } from 'services/consts';

const client = new ApolloClient({
  uri: host,
  cache: new InMemoryCache(),
});

export default client;
