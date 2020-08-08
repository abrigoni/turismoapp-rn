import { ApolloClient, InMemoryCache } from '@apollo/client';

export default new ApolloClient({
  uri: 'http://152.67.45.224/graphql',
  cache: new InMemoryCache()
});

