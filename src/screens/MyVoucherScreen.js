import React, {Component} from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import Voucher from '../components/Voucher';
import {Appbar, Colors} from 'react-native-paper';

export default class MyVoucherScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#F2DDBA'}}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
          <Appbar.Content title="My Voucher" />
        </Appbar.Header>

        <ScrollView style={{paddingTop: 20}}>
          <Voucher
            bodyColor={Colors.white}
            headColor={Colors.grey100}
            circleColor="#F2DDBA"
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
