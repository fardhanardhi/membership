import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class DashboardScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <View>
        <Text> dash </Text>
      </View>
    );
  }
}
