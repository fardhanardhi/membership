import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';
import {GoogleSignin} from '@react-native-community/google-signin';

export default class DashboardScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    GoogleSignin.configure();
  }

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.props.navigation.navigate('AuthLoading');
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <SafeAreaView>
        <Button onPress={this.signOut}>Logout</Button>
      </SafeAreaView>
    );
  }
}
