import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
  Dimensions,
} from 'react-native';
import {Colors, Card, Caption, FAB, Portal, Title} from 'react-native-paper';
import {GoogleSignin} from '@react-native-community/google-signin';
import {Voucher} from '../components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationStackProp} from 'react-navigation-stack';
import QRCode from 'react-native-qrcode-svg';
// import GestureRecognizer from 'react-native-swipe-gestures';
import Modal from 'react-native-modal';

interface IProps {
  navigation: NavigationStackProp;
}

interface IState {
  availableVouchers: IVoucher[];
  qrModalVisible: boolean;
}

interface IVoucher {
  quantity: number;
  type: number;
  cost: number;
  validityPeriod: string;
}

export default class DashboardScreen extends Component<IProps, IState> {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props: IProps) {
    super(props);

    this.state = {
      qrModalVisible: false,
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
    this.props.navigation.navigate('Voucher');
  };
  goToProfile = () => {
    this.props.navigation.navigate('Profile');
  };

  hideQRModal = () => this.setState({qrModalVisible: false});
  showQRModal = () => this.setState({qrModalVisible: true});

  render() {
    const deviceWidth = Dimensions.get('screen').width;
    const deviceHeight = Dimensions.get('screen').height;

    return (
      <>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={'#2C2B29'}
          translucent={false}
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
                backgroundColor: Colors.white,
                height: 30,
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 0,
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
                backgroundColor: '#FDF8F2',
              }}>
              <View
                style={{
                  // margin: 10,
                  height: 75,
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                  }}>
                  <TouchableOpacity
                    style={{flex: 1, zIndex: 5}}
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
              backgroundColor: Colors.white,
            }}>
            <ScrollView
              refreshControl={
                <RefreshControl refreshing={false} onRefresh={() => null} />
              }>
              <View style={{marginTop: 15, marginBottom: 65}}>
                <Caption style={{marginVertical: 20, alignSelf: 'center'}}>
                  Available voucher
                </Caption>
                {this.state.availableVouchers.map((item, index) => {
                  return (
                    <Voucher
                      key={index}
                      bodyColor="#EDE7DD"
                      headColor="#AF8F68"
                      headTextColor="#FDF8F2"
                      circleColor={Colors.white}
                      style={{marginBottom: 20, marginHorizontal: 30}}
                    />
                  );
                })}
              </View>
            </ScrollView>
          </View>
          <View style={styles.fab}>
            <FAB
              style={{backgroundColor: Colors.brown600}}
              label="Pay"
              icon={({size, color}) => (
                <MaterialCommunityIcons
                  name="qrcode"
                  size={size}
                  color={color}
                />
              )}
              onPress={this.showQRModal}
            />
          </View>
          <Portal>
            <Modal
              isVisible={this.state.qrModalVisible}
              backdropColor={'black'}
              backdropOpacity={0.75}
              useNativeDriver={true}
              onSwipeComplete={this.hideQRModal}
              onBackButtonPress={this.hideQRModal}
              swipeDirection="down"
              deviceHeight={deviceHeight}
              deviceWidth={deviceWidth}>
              <View
                style={{
                  backgroundColor: Colors.white,
                  borderRadius: 15,
                  padding: 20,
                  paddingBottom: 15,
                  width: 350,
                  maxWidth: 350,
                  minWidth: 250,
                  margin: 20,
                }}>
                <Title style={{fontWeight: 'bold'}}>QR Code</Title>
                <Text>Show this to purchase product or redeem points</Text>
                <View style={{alignItems: 'center', marginTop: 20}}>
                  <QRCode value="W6QY9PK1C4" size={175} color={Colors.black} />
                  <Text
                    style={{fontSize: 30, fontWeight: 'bold', marginTop: 10}}>
                    W6QY9PK1C4
                  </Text>
                  <Text style={{marginTop: 20}}>Slide down to close</Text>
                  <MaterialCommunityIcons name="chevron-down" size={20} />
                </View>
              </View>
            </Modal>

            {/* <Modal
              visible={this.state.qrModalVisible}
              onDismiss={this.hideQRModal}
              contentContainerStyle={{
                margin: 20,
                width: 350,
                maxWidth: 350,
                minWidth: 250,
                alignSelf: 'center',
              }}>
              <GestureRecognizer
                onSwipeDown={this.hideQRModal}
                config={{
                  velocityThreshold: 0.3,
                  directionalOffsetThreshold: 80,
                }}>
                <View
                  style={{
                    backgroundColor: Colors.white,
                    padding: 20,
                    paddingBottom: 15,
                    borderRadius: 15,
                  }}>
                  <Title style={{fontWeight: 'bold'}}>QR Code</Title>
                  <Text>Show this to purchase product or redeem points</Text>
                  <View style={{alignItems: 'center', marginTop: 20}}>
                    <QRCode
                      value="W6QY9PK1C4"
                      size={175}
                      color={Colors.black}
                    />
                    <Text
                      style={{fontSize: 30, fontWeight: 'bold', marginTop: 10}}>
                      W6QY9PK1C4
                    </Text>
                    <Text style={{marginTop: 20}}>Slide down to close</Text>
                    <MaterialCommunityIcons name="chevron-down" size={20} />
                  </View>
                </View>
              </GestureRecognizer>
            </Modal> */}
          </Portal>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 25,
    alignItems: 'center',
  },
});
