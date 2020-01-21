import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import {Appbar, Colors, Title, Text, Divider} from 'react-native-paper';
import {NavigationStackProp} from 'react-navigation-stack';
import {Voucher} from '../components';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DefaultTheme} from '../styles';

interface IProps {
  navigation: NavigationStackProp;
}

export default class VoucherDetailScreen extends Component<IProps> {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    const termsAndConditions =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit\nQuos, magnam autem corrupti\nipsam quibusdam itaque explicabo vel quas modi esse dolorem nobis culpa at libero\namet velit voluptatum nemo veritatis?';
    const usage =
      'Claim this voucher via application\nThis voucher will be appear in My Voucher page\nGo to My Voucher page, choose your voucher and redeem to merchant';

    const splitedTermsAndConditions = termsAndConditions.split(/\n/);
    const splitedusage = usage.split(/\n/);

    return (
      <>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={'#996244'}
          translucent={false}
        />
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.grey50}}>
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
                elevation: 2,
              }}>
              <Voucher
                bodyColor="#EDE7DD"
                headColor="#D9B69C"
                headTextColor="#4D4B47"
                circleColor={Colors.white}
              />
            </View>
            <View style={{padding: 20}}>
              {/* head */}
              <View style={{marginBottom: 20}}>
                <Title style={{fontSize: 25, marginBottom: 15}}>
                  Cashback 50% s/d 10RB
                </Title>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 10,
                  }}>
                  <MaterialIcons
                    size={17}
                    name="clock"
                    color={Colors.brown600}
                    style={{marginRight: 5}}
                  />
                  <Text style={{flex: 1}}>Valid until</Text>
                  <Text style={{fontWeight: 'bold'}}>31 Jan 2020</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialIcons
                    size={17}
                    name="alpha-p-circle"
                    color={Colors.brown600}
                    style={{marginRight: 5}}
                  />
                  <Text style={{flex: 1}}>Cost</Text>
                  <Text style={{fontWeight: 'bold'}}>FREE</Text>
                </View>
              </View>
              <Divider />
              <View style={{marginTop: 20, marginBottom: 20}}>
                <Title style={{marginBottom: 5}}>Terms and Conditions</Title>
                {splitedTermsAndConditions.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text>{index + 1}. </Text>
                      <Text style={{flex: 1, flexWrap: 'wrap'}}>{item}</Text>
                    </View>
                  );
                })}
              </View>
              <Divider />
              <View style={{marginTop: 20}}>
                <Title style={{marginBottom: 5}}>How to Claim?</Title>
                {splitedusage.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text>{index + 1}. </Text>
                      <Text style={{flex: 1, flexWrap: 'wrap'}}>{item}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </ScrollView>
          <View
            style={{
              height: 75,
              backgroundColor: Colors.white,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 20,
            }}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TouchableNativeFeedback
                delayPressIn={0}
                onPress={() => null}
                background={
                  Platform.Version >= 21
                    ? TouchableNativeFeedback.Ripple(
                        'rgba(255,255,255,.5)',
                        false,
                      )
                    : TouchableNativeFeedback.SelectableBackground()
                }>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: DefaultTheme.colors.primary,
                    margin: 10,
                    borderRadius: 10,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: Colors.white,
                      textAlign: 'center',
                      textAlignVertical: 'center',
                    }}>
                    Claim
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
