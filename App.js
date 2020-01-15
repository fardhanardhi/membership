/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {Provider as PaperProvider, Button} from 'react-native-paper';
import {createAppContainer} from 'react-navigation';
import {AppNavigator} from './src/navigators';
import {DefaultTheme} from './src/styles';

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <PaperProvider theme={DefaultTheme}>
      <AppContainer />
    </PaperProvider>
  );
};

export default App;
