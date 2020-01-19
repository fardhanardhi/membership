import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Appbar,
  Avatar,
  Colors,
  Subheading,
  Title,
  List,
  Divider,
} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {ScrollView} from 'react-native-gesture-handler';
import {GoogleSignin} from '@react-native-community/google-signin';
import {NavigationSwitchProp} from 'react-navigation';

interface IProps {
  navigation: NavigationSwitchProp;
}

export default class ProfileScreen extends Component<IProps> {
  static navigationOptions = {
    headerShown: false,
  };

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

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
          <Appbar.Content title="Profile" />
        </Appbar.Header>

        <ScrollView style={{backgroundColor: Colors.grey200}}>
          <View
            style={{
              backgroundColor: Colors.white,
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
            <List.Item
              title="Change Username"
              left={props => (
                <List.Icon
                  {...props}
                  icon={() => <Fontisto name="at" size={18} />}
                />
              )}
              right={props => <List.Icon {...props} icon="chevron-right" />}
            />
            <Divider style={{marginHorizontal: 20}} />
            <List.Item
              title="Change Password"
              left={props => (
                <List.Icon
                  {...props}
                  icon={() => <Fontisto name="locked" size={18} />}
                />
              )}
              right={props => <List.Icon {...props} icon="chevron-right" />}
            />
          </View>

          <View style={styles.viewSubContent}>
            <Subheading style={styles.profileItem}>About</Subheading>
            <List.Item
              title="Version: 1.0"
              left={props => (
                <List.Icon
                  {...props}
                  icon={() => <FontAwesome name="info-circle" size={20} />}
                />
              )}
            />
            <Divider style={{marginHorizontal: 20}} />
            <List.Item
              title="Help"
              left={props => (
                <List.Icon
                  {...props}
                  icon={() => <FontAwesome name="question-circle" size={20} />}
                />
              )}
              right={props => <List.Icon {...props} icon="chevron-right" />}
            />
          </View>

          <TouchableOpacity onPress={this.signOut}>
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.white,
                marginBottom: 10,
                paddingTop: 10,
                paddingBottom: 10,
              }}>
              <List.Item
                title="Logout"
                left={props => <List.Icon {...props} icon="logout" />}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  profileItem: {
    marginLeft: 22,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  viewSubContent: {
    flex: 1,
    backgroundColor: Colors.white,
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
