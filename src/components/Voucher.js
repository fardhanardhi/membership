import React from 'react';
import {View, Text} from 'react-native';
import {Card, Colors} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Voucher = props => {
  return (
    <View>
      <Card
        style={{
          borderRadius: 7,
          elevation: 0,
          marginBottom: 20,
          marginHorizontal: 30,
          // padding: 10,
          height: 120,
          backgroundColor: props.bodyColor,
        }}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View
            style={{
              backgroundColor: props.headColor,
              width: 90,
              borderBottomLeftRadius: 7,
              borderTopLeftRadius: 7,
            }}
          />
        </View>

        <FontAwesome
          style={{position: 'absolute', top: -12, left: 80}}
          name="circle"
          size={24}
          color={props.circleColor}
        />
        {/* <Text>aaaa</Text> */}
        <FontAwesome
          style={{position: 'absolute', bottom: -12, left: 80}}
          name="circle"
          size={24}
          color={props.circleColor}
        />
      </Card>
    </View>
  );
};

export default Voucher;
