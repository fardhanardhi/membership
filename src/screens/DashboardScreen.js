import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Button, Colors, Card, Caption, Title} from 'react-native-paper';
import {DefaultTheme} from '../styles';
import {GoogleSignin} from '@react-native-community/google-signin';
import {Voucher} from '../components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
  goToMyVoucher = () => {
    this.props.navigation.navigate('MyVoucher');
  };
  goToProfile = () => {
    this.props.navigation.navigate('Profile');
  };

  render() {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={'transparent'}
          translucent={true}
        />
        <SafeAreaView style={{flex: 1}}>
          <View>
            <ImageBackground
              style={{
                paddingTop: 15,
              }}
              source={require('../assets/banner.png')}>
              <View
                style={{marginTop: 40, marginBottom: 80, alignItems: 'center'}}>
                <Text style={{color: '#eee8dd'}}>Your points</Text>
                <Text
                  style={{
                    color: '#e5ddcc',
                    fontSize: 60,
                    marginBottom: 20,
                  }}>
                  1000
                </Text>
                <View style={{flexDirection: 'row', marginBottom: 20}}>
                  <View style={{flex: 1, alignItems: 'center'}}>
                    <View>
                      <Text style={{color: Colors.white}}>Point income</Text>
                      <Text
                        style={{
                          color: '#e5ddcc',
                          fontSize: 30,
                          fontWeight: 'bold',
                        }}>
                        1020
                      </Text>
                    </View>
                  </View>
                  <View style={{flex: 1, alignItems: 'center'}}>
                    <View>
                      <Text style={{color: Colors.white}}>Point outcome</Text>
                      <Text
                        style={{
                          color: '#e5ddcc',
                          fontSize: 30,
                          fontWeight: 'bold',
                        }}>
                        105
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </ImageBackground>
            <View
              style={{
                backgroundColor: '#F2DDBA',
                height: 30,
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 2,
              }}
            />
            <Card
              style={{
                borderRadius: 10,
                marginHorizontal: 20,
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: -10,
                elevation: 3,
                flex: 1,
                backgroundColor:"#FBF4EA"
              }}>
              <View
                style={{
                  margin: 10,
                  height: 55,
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                  }}>
                  <TouchableOpacity
                    style={{flex: 1}}
                    onPress={this.goToMyVoucher}>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <MaterialCommunityIcons
                        color="#4D4B47"
                        size={30}
                        name="ticket-outline"
                      />
                      <Caption>My Voucher</Caption>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{flex: 1}}
                    onPress={this.goToHistory}>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <MaterialCommunityIcons
                        color="#4D4B47"
                        size={30}
                        name="history"
                      />
                      <Caption>Histoy</Caption>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{flex: 1}}
                    onPress={this.goToProfile}>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <MaterialCommunityIcons
                        color="#4D4B47"
                        size={30}
                        name="account-outline"
                      />
                      <Caption>Profile</Caption>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
          </View>
          <View
            style={{
              flex: 1,
              height: 120,
              backgroundColor: '#F2DDBA',
            }}>
            <ScrollView>
              <View style={{marginTop: 15}}>
                <Caption style={{marginVertical: 20, alignSelf: 'center'}}>
                  Available voucher
                </Caption>
                {this.state.availableVouchers.map((itenm, index) => {
                  return (
                    <Voucher
                      key={index}
                      bodyColor={Colors.grey100}
                      headColor={Colors.white}
                      circleColor="#F2DDBA"
                    />
                  );
                })}
                <Button onPress={this.goToProfile}>Profile</Button>
                <Button onPress={this.goToHistory}>History</Button>
                <Button onPress={this.signOut}>Logout</Button>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
