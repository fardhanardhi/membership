import React, {Component} from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import {
  TextInput,
  Colors,
  Button,
  Caption,
  Subheading,
  Title,
} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native-gesture-handler';
import {NavigationStackProp} from 'react-navigation-stack';

interface IProps {
  navigation: NavigationStackProp;
}

interface IState {
  username: string;
  password: string;
  userInfo: string;
  isSigninInProgress: boolean;
}

export default class LoginScreen extends Component<IProps, IState> {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props: IProps) {
    super(props);

    this.state = {
      username: '',
      password: '',
      userInfo: '',
      isSigninInProgress: false,
    };
  }

  componentDidMount() {
    GoogleSignin.configure({
      scopes: [], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '436028966203-ajks6cd16ogjhvbcrmv992sbh60hdpha.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
      accountName: '', // [Android] specifies an account name on the device that should be used
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }

  signIn = async () => {
    try {
      this.setState({isSigninInProgress: true});
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.props.navigation.navigate('AuthLoading');
      console.log(userInfo);
      // this.setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
      console.log('aaa`');
    }
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.white,
        }}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 15,
              marginTop: 20,
              marginLeft: 25,
              marginRight: 5,
              // backgroundColor: Colors.yellow500,
              alignItems: 'center',
            }}>
            <MaterialIcons
              onPress={() => this.props.navigation.goBack()}
              name="arrow-back"
              size={25}
              color={Colors.grey800}
            />
            <View style={{flex: 1}} />
            <Button
              uppercase={false}
              style={styles.button}
              mode="text"
              onPress={() => this.props.navigation.navigate('Register')}>
              Sign Up
            </Button>
          </View>
          <View
            style={{
              marginHorizontal: 30,
              marginBottom: 20,
              // flex: 1,
              // justifyContent: 'center',
              // alignItems: 'center',
            }}>
            <Title style={{fontSize: 25, marginBottom: 10}}>
              Member Sign In
            </Title>
            <TextInput
              autoFocus
              style={styles.textInput}
              label="Username"
              value={this.state.username}
              onChangeText={text => this.setState({username: text})}
            />
            <TextInput
              secureTextEntry
              style={styles.textInput}
              label="Password"
              value={this.state.password}
              onChangeText={text => this.setState({password: text})}
            />
          </View>
          <View
            style={{
              marginHorizontal: 25,
            }}>
            <Button
              style={styles.button}
              mode="contained"
              onPress={this.signIn}>
              Sign In
            </Button>
          </View>
          <View style={{alignItems: 'center', marginBottom: 40}}>
            <Caption style={{marginVertical: 15}}>OR</Caption>
            <View
              style={{
                backgroundColor: Colors.white,
                elevation: 2,
                borderRadius: 7,
              }}>
              <TouchableNativeFeedback
                onPress={this.signIn}
                style={{
                  borderRadius: 10,
                  padding: 10,
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  // alignSelf: 'stretch',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/google.png')}
                  resizeMode="contain"
                />
                <Subheading
                  style={{
                    marginLeft: 15,
                    lineHeight: 27,
                    color: Colors.grey800,
                  }}>
                  Sign in with Google
                </Subheading>
              </TouchableNativeFeedback>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = {
  textInput: {
    marginBottom: 5,
    backgroundColor: Colors.white,
    borderRadius: 3,
  },
  button: {
    margin: 5,
  },
};
