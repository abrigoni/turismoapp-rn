import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import {name as appName} from './app.json';
import theme from './theme';
import App from './src/App';
import { ApolloProvider } from '@apollo/client';
import client from './src/graphql/client';

export default function Main() {
  return (
    <ApolloProvider client={client}>
      <PaperProvider theme={theme}>
        <App/>
      </PaperProvider>
    </ApolloProvider>
  );
};


AppRegistry.registerComponent(appName, () => Main);
