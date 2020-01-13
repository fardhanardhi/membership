import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class LoginScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <View>
        <Text> Login </Text>
      </View>
    );
  }
}
