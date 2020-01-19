import React, {Component} from 'react';
import {View, SafeAreaView} from 'react-native';
import {GoogleSignin} from '@react-native-community/google-signin';
import {LoadingIndicator} from '../components';
import {NavigationSwitchProp} from 'react-navigation';

interface IProps {
  navigation: NavigationSwitchProp;
}

export default class AuthLoadingScreen extends Component<IProps> {
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    this.isSignedIn();
  }

  isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    // this.setState({isLoginScreenPresented: !isSignedIn});
    if (await isSignedIn) {
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('Auth');
    }
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <LoadingIndicator />
        </View>
      </SafeAreaView>
    );
  }
}
