import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {Appbar} from 'react-native-paper';
import {HistoryItem} from '../components';
import {ScrollView} from 'react-native-gesture-handler';

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

  back = () => {
    this.props.navigation.navigate('Dashboard');
  };

  render() {
    return (
      <SafeAreaView>
        <Appbar.Header>
          <Appbar.BackAction onPress={this.back} />
          <Appbar.Content title="History" />
        </Appbar.Header>

        <ScrollView style={{backgroundColor: 'white'}}>
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
    );
  }
}
