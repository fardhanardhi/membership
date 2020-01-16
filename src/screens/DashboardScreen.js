import React, {Component} from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import {Button, Colors, Card, Caption} from 'react-native-paper';
import {DefaultTheme} from '../styles';
import {GoogleSignin} from '@react-native-community/google-signin';
import {Voucher} from '../components';

export default class DashboardScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      availableVouchers: [
        {quantity: 5, type: 1, cost: 0, validityPeriod: '15 Jan 2020'},
        {quantity: 1, type: 3, cost: 1000, validityPeriod: '24 Jan 2020'},
        {quantity: 7, type: 2, cost: 5000, validityPeriod: '25 Jan 2020'},
        {quantity: 5, type: 1, cost: 0, validityPeriod: '27 Jan 2020'},
        {quantity: 5, type: 1, cost: 0, validityPeriod: '31 Jan 2020'},
        {quantity: 5, type: 1, cost: 0, validityPeriod: '15 Jan 2020'},
        {quantity: 1, type: 3, cost: 1000, validityPeriod: '24 Jan 2020'},
        {quantity: 7, type: 2, cost: 5000, validityPeriod: '25 Jan 2020'},
        {quantity: 5, type: 1, cost: 0, validityPeriod: '27 Jan 2020'},
        {quantity: 5, type: 1, cost: 0, validityPeriod: '31 Jan 2020'},
        {quantity: 5, type: 1, cost: 0, validityPeriod: '15 Jan 2020'},
        {quantity: 1, type: 3, cost: 1000, validityPeriod: '24 Jan 2020'},
        {quantity: 7, type: 2, cost: 5000, validityPeriod: '25 Jan 2020'},
        {quantity: 5, type: 1, cost: 0, validityPeriod: '27 Jan 2020'},
        {quantity: 5, type: 1, cost: 0, validityPeriod: '31 Jan 2020'},
      ],
    };
  }

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

  goToHistory = () => {
    this.props.navigation.navigate('History');
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 2,
            height: 120,
            backgroundColor: DefaultTheme.colors.primary,
          }}></View>
        <View
          style={{
            flex: 4,
            height: 120,
            backgroundColor: Colors.grey200,
          }}>
          <Card
            style={{
              borderRadius: 10,
              marginHorizontal: 20,
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              elevation: 3,
            }}>
            <View
              style={{margin: 10, height: 55, justifyContent: 'center'}}></View>
          </Card>
          <View
            style={{
              // position: 'absolute',
              backgroundColor: DefaultTheme.colors.primary,
              height: 40,
            }}
          />
          <ScrollView>
            <View style={{marginTop: 40}}>
              <Caption style={{marginVertical: 20, alignSelf: 'center'}}>
                Available voucher
              </Caption>
              {this.state.availableVouchers.map((itenm, index) => {
                return <Voucher key={index} />;
              })}
              <Button onPress={this.goToHistory}>History</Button>
              <Button onPress={this.signOut}>Logout</Button>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
