import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {Button, TextInput} from 'react-native-paper';

export default class AuthLoadingScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <View>
        <Text>Loading</Text>
        <Button
          style={{marginHorizontal: 15, marginVertical: 5}}
          mode="contained"
          onPress={() => {
            this.props.navigation.navigate('Auth');
          }}>
          Login
        </Button>
      </View>
    );
  }
}
