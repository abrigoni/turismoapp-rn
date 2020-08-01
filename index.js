import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import {name as appName} from './app.json';
import theme from './theme';
import App from './src/App';

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App/>
    </PaperProvider>
  );
};


AppRegistry.registerComponent(appName, () => Main);
