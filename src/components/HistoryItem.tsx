import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import {List, Colors, Divider} from 'react-native-paper';

interface IProps {
  dateTime: string;
  transactionType: 'purchase-product' | 'redeem-point' | 'redeem-voucher';
  point: number;
}

const HistoryItem: React.FC<IProps> = props => {
  return (
    <>
      <List.Item
        title={props.transactionType}
        description={props.dateTime}
        left={props => (
          <List.Icon
            {...props}
            icon="cart"
            color={Colors.white}
            style={styles.icon}
          />
        )}
        right={() => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Image
              source={
                props.transactionType == 'purchase-product'
                  ? require('../assets/point.png')
                  : require('../assets/google.png')
              }
              resizeMode="contain"
              style={{width: 21, height: 21, marginRight: 7}}
            />
            <Text style={{fontWeight: 'bold', fontSize: 18}}>
              {props.transactionType == 'purchase-product' ? '+ ' : '- '}
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>
              {props.point}
            </Text>
          </View>
        )}
      />
      <Divider style={styles.divider} />
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: 'black',
    borderRadius: 50,
  },
  divider: {
    height: 1,
  },
});

export default HistoryItem;
