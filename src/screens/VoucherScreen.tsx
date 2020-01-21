import React, {Component} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
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
      <>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={'#996244'}
          translucent={false}
        />
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
          <Appbar.Header>
            <Appbar.BackAction
              onPress={() => {
                this.props.navigation.goBack();
              }}
            />
            <Appbar.Content title="My Voucher" />
          </Appbar.Header>

          <ScrollView>
            <View style={{marginTop: 20}}>
              <Voucher
                bodyColor="#EDE7DD"
                headColor="#D9B69C"
                headTextColor="#4D4B47"
                circleColor={Colors.white}
                style={{marginHorizontal: 20, marginBottom: 20}}
              />
              <Voucher
                bodyColor="#EDE7DD"
                headColor="#D9B69C"
                headTextColor="#4D4B47"
                circleColor={Colors.white}
                style={{marginHorizontal: 20, marginBottom: 20}}
              />
              <Voucher
                bodyColor="#EDE7DD"
                headColor="#D9B69C"
                headTextColor="#4D4B47"
                circleColor={Colors.white}
                style={{marginHorizontal: 20, marginBottom: 20}}
              />
              <Voucher
                bodyColor="#EDE7DD"
                headColor="#D9B69C"
                headTextColor="#4D4B47"
                circleColor={Colors.white}
                style={{marginHorizontal: 20, marginBottom: 20}}
              />
              <Voucher
                bodyColor="#EDE7DD"
                headColor="#D9B69C"
                headTextColor="#4D4B47"
                circleColor={Colors.white}
                style={{marginHorizontal: 20, marginBottom: 20}}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
