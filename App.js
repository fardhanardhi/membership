/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {Provider as PaperProvider, Button} from 'react-native-paper';
import {View, Text} from 'react-native';

// import {createAppContainer} from 'react-navigation';
// import {AppNavigator} from './src/navigators';

// const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <PaperProvider>
      {/* <AppContainer /> */}
      <View>
        <Text>App</Text>
        <Button icon="camera">Press me</Button>
      </View>
    </PaperProvider>
  );
};

export default App;
