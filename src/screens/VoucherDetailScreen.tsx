import React, {Component} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {Appbar, Colors} from 'react-native-paper';
import {NavigationStackProp} from 'react-navigation-stack';
import {Voucher} from '../components';

interface IProps {
  navigation: NavigationStackProp;
}

export default class VoucherDetailScreen extends Component<IProps> {
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
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.grey200}}>
          <Appbar.Header>
            <Appbar.BackAction
              onPress={() => {
                this.props.navigation.goBack();
              }}
            />
            <Appbar.Content title="Voucher Detail" />
          </Appbar.Header>

          <ScrollView style={{flex: 1}}>
            {/* voucher contaier */}
            <View
              style={{
                backgroundColor: Colors.white,
                paddingHorizontal: 30,
                paddingVertical: 30,
                elevation: 5,
              }}>
              <Voucher
                bodyColor="#EDE7DD"
                headColor="#D9B69C"
                headTextColor="#4D4B47"
                circleColor={Colors.white}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
