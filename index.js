import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'react-native-elements';
import { name as appName } from './app.json';
import App from './src/App';
import client from './src/graphql/client';
import theme from './theme';

export default function Main() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  );
};


AppRegistry.registerComponent(appName, () => Main);
