import React, {Component} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Voucher from '../components/Voucher';
import {Appbar, Colors} from 'react-native-paper';
import {NavigationStackProp} from 'react-navigation-stack';

interface IProps {
  navigation: NavigationStackProp;
}

export default class MyVoucherScreen extends Component<IProps> {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
          <Appbar.Content title="My Voucher" />
        </Appbar.Header>

        <ScrollView style={{paddingTop: 20}}>
          <Voucher
            bodyColor={Colors.grey100}
            headColor="#D9B69C"
            circleColor={Colors.white}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
