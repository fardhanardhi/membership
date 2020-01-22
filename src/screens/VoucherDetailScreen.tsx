import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import {
  Appbar,
  Colors,
  Title,
  Text,
  Divider,
  Portal,
  Button,
} from 'react-native-paper';
import {Voucher, QRModal} from '../components';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DefaultTheme} from '../styles';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import QRCode from 'react-native-qrcode-svg';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface INavigationParams {
  isClaimed: boolean;
}

type Navigation = NavigationScreenProp<NavigationState, INavigationParams>;

interface IProps {
  navigation: Navigation;
}

interface IState {
  isClaimed: boolean;
  qrModalVisible: boolean;
}

export default class VoucherDetailScreen extends Component<IProps, IState> {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props: IProps) {
    super(props);

    this.state = {
      isClaimed: false,
      qrModalVisible: false,
    };
  }

  componentDidMount() {
    const {params} = this.props.navigation.state;
    if (params) {
      if (params.isClaimed) {
        this.setState({
          isClaimed: params.isClaimed,
        });
      }
    }
  }

  hideQRModal = () => this.setState({qrModalVisible: false});
  showQRModal = () => this.setState({qrModalVisible: true});

  render() {
    const termsAndConditions =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit\nQuos, magnam autem corrupti\nipsam quibusdam itaque explicabo vel quas modi esse dolorem nobis culpa at libero\namet velit voluptatum nemo veritatis?';
    const usage =
      'Claim this voucher via application\nThis voucher will be appear in My Voucher page\nGo to My Voucher page, choose your voucher and redeem to merchant';

    const splitedTermsAndConditions = termsAndConditions.split(/\n/);
    const splitedusage = usage.split(/\n/);

    return (
      <>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={'#996244'}
          translucent={false}
        />
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.grey50}}>
          <Appbar.Header>
            <Appbar.BackAction
              onPress={() => {
                this.props.navigation.goBack();
              }}
            />
            <Appbar.Content title="Voucher Detail" />
          </Appbar.Header>

          <ScrollView style={{flex: 1}}>
            {/* voucher header contaier / qr container */}
            {this.state.isClaimed ? (
              <>
                <TouchableOpacity onPress={this.showQRModal}>
                  <View
                    style={{
                      backgroundColor: Colors.white,
                      paddingHorizontal: 30,
                      paddingVertical: 30,
                      elevation: 2,
                      alignItems: 'center',
                    }}>
                    <QRCode
                      value="W6QY9PK1C4"
                      size={120}
                      color={Colors.black}
                    />
                    <Text
                      style={{fontSize: 25, fontWeight: 'bold', marginTop: 10}}>
                      W6QY9PK1C4
                    </Text>
                  </View>
                </TouchableOpacity>
                <Divider />
                <View
                  style={{
                    backgroundColor: Colors.white,
                    paddingHorizontal: 30,
                    paddingTop: 5,
                    paddingBottom: 10,
                    elevation: 2,
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 25, marginTop: 10}}>
                    Usage remaining
                  </Text>
                  <Text
                    style={{
                      fontSize: 50,
                      marginTop: 10,
                      fontWeight: 'bold',
                      lineHeight: 50,
                    }}>
                    3
                  </Text>
                </View>
              </>
            ) : (
              <View
                style={{
                  backgroundColor: Colors.white,
                  paddingHorizontal: 30,
                  paddingVertical: 30,
                  elevation: 2,
                }}>
                <Voucher
                  bodyColor="#EDE7DD"
                  headColor="#D9B69C"
                  headTextColor="#4D4B47"
                  circleColor={Colors.white}
                />
              </View>
            )}
            <View style={{padding: 20}}>
              {/* head */}
              <View style={{marginBottom: 20}}>
                <Title style={{fontSize: 25, marginBottom: 15}}>
                  Cashback 50% s/d 10RB
                </Title>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 10,
                  }}>
                  <MaterialIcons
                    size={17}
                    name="clock"
                    color={Colors.brown600}
                    style={{marginRight: 5}}
                  />
                  <Text style={{flex: 1}}>Valid until</Text>
                  <Text style={{fontWeight: 'bold'}}>31 Jan 2020</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialIcons
                    size={17}
                    name="alpha-p-circle"
                    color={Colors.brown600}
                    style={{marginRight: 5}}
                  />
                  <Text style={{flex: 1}}>Cost</Text>
                  <Text style={{fontWeight: 'bold'}}>FREE</Text>
                </View>
              </View>
              <Divider />
              <View style={{marginTop: 20, marginBottom: 20}}>
                <Title style={{marginBottom: 5}}>Terms and Conditions</Title>
                {splitedTermsAndConditions.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text>{index + 1}. </Text>
                      <Text style={{flex: 1, flexWrap: 'wrap'}}>{item}</Text>
                    </View>
                  );
                })}
              </View>
              <Divider />
              <View style={{marginTop: 20}}>
                <Title style={{marginBottom: 5}}>How to Claim?</Title>
                {splitedusage.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text>{index + 1}. </Text>
                      <Text style={{flex: 1, flexWrap: 'wrap'}}>{item}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
            {/* delete button (claimed) */}
            {this.state.isClaimed ? (
              <Button onPress={() => null} mode="outlined" style={{margin: 20}}>
                Delete Voucher
              </Button>
            ) : null}
          </ScrollView>

          {/* fixed claim button (not claimed) */}
          {this.state.isClaimed ? null : (
            <View
              style={{
                height: 75,
                backgroundColor: Colors.white,
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 20,
              }}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableNativeFeedback
                  delayPressIn={0}
                  onPress={() => null}
                  background={
                    Platform.Version >= 21
                      ? TouchableNativeFeedback.Ripple(
                          'rgba(255,255,255,.5)',
                          false,
                        )
                      : TouchableNativeFeedback.SelectableBackground()
                  }>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: DefaultTheme.colors.primary,
                      margin: 10,
                      borderRadius: 10,
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 25,
                        color: Colors.white,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                      }}>
                      Claim
                    </Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
          )}

          <Portal>
            <QRModal
              isVisible={this.state.qrModalVisible}
              onHide={this.hideQRModal}
              subtitle="Show this to redeem voucher"
              value="W6QY9PK1C4"
            />
          </Portal>
        </SafeAreaView>
      </>
    );
  }
}
