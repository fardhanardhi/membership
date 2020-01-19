import React, {Component} from 'react';
import {View, SafeAreaView} from 'react-native';
import {Colors, Title} from 'react-native-paper';
import Icons from 'react-native-vector-icons/FontAwesome5';

export default class WelcomeScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#BD7E50', flex: 1}}>
        <View style={{margin: 30, marginTop: 50}}>
          <Icons
            size={40}
            name="user-tag"
            color={Colors.white}
            style={{marginBottom: 10}}
          />
          <Title style={{fontSize: 25, color: Colors.white}}>
            Welcome to Membership.
          </Title>
        </View>
      </SafeAreaView>
    );
  }
}
