import React, {Component} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Appbar} from 'react-native-paper';
import {HistoryItem} from '../components';
import {ScrollView} from 'react-native-gesture-handler';
import {NavigationStackProp} from 'react-navigation-stack';

interface IProps {
  navigation: NavigationStackProp;
}

export default class HistoryScreen extends Component<IProps> {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props: IProps) {
    super(props);

    this.state = {
      historyList: [
        {type: 'purchase product', date: 'haha', point: '500'},
        {type: 'purchase product', date: 'haha', point: '500'},
        {type: 'purchase product', date: 'haha', point: '500'},
      ],
    };
  }

  render() {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={'#996244'}
          translucent={false}
        />
        <SafeAreaView style={{flex: 1, backgroundColor: '#FBF4EA'}}>
          <Appbar.Header>
            <Appbar.BackAction
              onPress={() => {
                this.props.navigation.goBack();
              }}
            />
            <Appbar.Content title="History" />
          </Appbar.Header>

          <ScrollView>
            <HistoryItem
              transactionType="purchase-product"
              dateTime="03 Jan 2020, 14:00"
              point={5000}
            />
            <HistoryItem
              transactionType="purchase-product"
              dateTime="03 Jan 2020, 14:00"
              point={5000}
            />
            <HistoryItem
              transactionType="purchase-product"
              dateTime="03 Jan 2020, 14:00"
              point={5000}
            />
            <HistoryItem
              transactionType="purchase-product"
              dateTime="03 Jan 2020, 14:00"
              point={5000}
            />
            <HistoryItem
              transactionType="purchase-product"
              dateTime="03 Jan 2020, 14:00"
              point={5000}
            />
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
