import React, {Component} from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {
  Appbar,
  Avatar,
  Colors,
  Subheading,
  Title,
  List,
} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {ScrollView} from 'react-native-gesture-handler';
import {ProfileItem} from '../components';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <SafeAreaView>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
          <Appbar.Content title="Profile" />
        </Appbar.Header>

        <ScrollView style={{backgroundColor: Colors.grey200}}>
          <View
            style={{
              backgroundColor: Colors.white,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 30,
              marginBottom: 2,
            }}>
            <Avatar.Icon
              style={{backgroundColor: 'transparent', marginBottom: 5}}
              icon={() => <Feather name="user" size={64} />}
            />
            <Title style={{textTransform: 'capitalize', fontWeight: 'bold'}}>
              full name
            </Title>
            <Text style={{fontSize: 17}}>username</Text>
          </View>

          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <View
              style={{
                flex: 0.5,
                backgroundColor: Colors.white,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 30,
                marginRight: 1,
              }}>
              <Image
                source={require('../assets/point.png')}
                resizeMode="contain"
                style={{width: 25, height: 25, marginRight: 7}}
              />
              <Text>My Points</Text>
              <Subheading
                style={{textTransform: 'capitalize', fontWeight: 'bold'}}>
                5000 Points
              </Subheading>
            </View>

            <View
              style={{
                flex: 0.5,
                backgroundColor: Colors.white,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 30,
                marginLeft: 1,
              }}>
              <Image
                source={require('../assets/voucher.png')}
                resizeMode="contain"
                style={{width: 25, height: 25, marginRight: 7}}
              />
              <Text>My Vouchers</Text>
              <Subheading
                style={{textTransform: 'capitalize', fontWeight: 'bold'}}>
                5 Vouchers
              </Subheading>
            </View>
          </View>

          <View style={styles.viewSubContent}>
            <Subheading style={styles.profileItem}>Profile</Subheading>
            <List.Item
              title="Edit Profile"
              left={props => (
                <List.Icon
                  {...props}
                  icon={() => <FontAwesome name="user" size={20} />}
                />
              )}
              right={props => <List.Icon {...props} icon="chevron-right" />}
            />
          </View>

          <View style={styles.viewSubContent}>
            <Subheading style={styles.profileItem}>Account</Subheading>
            <ProfileItem
              icon={() => <Fontisto name="at" size={18} />}
              title={'Change Username'}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = {
  profileItem: {
    marginTop: 22,
    marginLeft: 22,
    marginBottom: 0,
    fontWeight: 'bold',
  },
  viewSubContent: {flex: 1, backgroundColor: Colors.white, marginBottom: 10},
};
