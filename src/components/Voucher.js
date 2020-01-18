import React from 'react';
import {View, Text} from 'react-native';
import {Card, Colors} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

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
              margin: 10,
              marginLeft: 20,
              flex: 1,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#4D4B47'}}>
              Cashback 50% s/d 10RB
            </Text>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  backgroundColor: Colors.green500,
                  borderRadius: 3,
                  padding: 2,
                  paddingHorizontal: 5,
                  marginVertical: 5,
                }}>
                <Text style={{color: Colors.white}}>FREE</Text>
              </View>
              <View style={{flex: 1}} />
            </View>

            <View style={{flex: 1}} />

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcons size={15} name="clock" color={Colors.grey500} />
              <Text style={{marginLeft: 5, color: Colors.grey700}}>
                Valid until: 31 Jan 2020
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: props.headColor,
              width: 90,
              borderBottomRightRadius: 7,
              borderTopRightRadius: 7,
            }}
          ></View>
        </View>

        <FontAwesome
          style={{position: 'absolute', top: -12, right: 80}}
          name="circle"
          size={24}
          color={props.circleColor}
        />
        {/* <Text>aaaa</Text> */}
        <FontAwesome
          style={{position: 'absolute', bottom: -12, right: 80}}
          name="circle"
          size={24}
          color={props.circleColor}
        />
      </Card>
    </View>
  );
};

export default Voucher;
