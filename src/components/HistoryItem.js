import React from 'react';
import {Fragment, Text, Image, View} from 'react-native';
import {List, Colors, Divider} from 'react-native-paper';

const HistoryItem = props => {
  return (
    <>
      <List.Item
        title={props.transactionType}
        titleStyle={styles.title}
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
                props.transactionType == 'purchase'
                  ? require('../assets/point.png')
                  : require('../assets/google.png')
              }
              resizeMode="contain"
              style={{width: 21, height: 21, marginRight: 7}}
            />
            <Text style={styles.textPoint}>
              {props.transactionType == 'purchase' ? '+ ' : '- '}
            </Text>
            <Text style={styles.textPoint}>{props.point}</Text>
          </View>
        )}
      />
      <Divider style={styles.divider} />
    </>
  );
};

const styles = {
  icon: {
    backgroundColor: 'black',
    borderRadius: 50,
  },
  divider: {
    height: 1,
  },
  textPoint: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  title: {
    textTransform: 'capitalize',
  },
};

export default HistoryItem;
