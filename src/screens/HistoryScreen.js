import React, {Component} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Appbar, Colors} from 'react-native-paper';
import {HistoryItem} from '../components';
import {ScrollView} from 'react-native-gesture-handler';
import {DefaultTheme} from '../styles';

export default class HistoryScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    historyList: [
      {type: 'purchase product', date: 'haha', point: '500'},
      {type: 'purchase product', date: 'haha', point: '500'},
      {type: 'purchase product', date: 'haha', point: '500'},
    ],
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
        <SafeAreaView style={{flex:1, backgroundColor:"#FBF4EA"}}>
          <Appbar.Header>
            <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
            <Appbar.Content title="History" />
          </Appbar.Header>

          <ScrollView>
            <HistoryItem
              transactionType="purchase"
              dateTime="03 Jan 2020, 14:00"
              point="50000"
            />
            <HistoryItem
              transactionType="purchase"
              dateTime="03 Jan 2020, 14:00"
              point="50000"
            />
            <HistoryItem
              transactionType="purchase"
              dateTime="03 Jan 2020, 14:00"
              point="50000"
            />
            <HistoryItem
              transactionType="purchase"
              dateTime="03 Jan 2020, 14:00"
              point="50000"
            />
            <HistoryItem
              transactionType="purchase"
              dateTime="03 Jan 2020, 14:00"
              point="50000"
            />
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
