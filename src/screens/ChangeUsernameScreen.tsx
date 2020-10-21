import React, {Component} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Appbar, Colors, TextInput, Snackbar} from 'react-native-paper';
import {NavigationStackProp} from 'react-navigation-stack';

interface IProps {
    navigation: NavigationStackProp;
  }
  
  interface IState {
    username: string;
    password: string;
    isUsernameValid: boolean;
    isPasswordValid: boolean;
    isSnackbarVisible: boolean;
  }

  export default class ChangeUsernameScreen extends Component<IProps, IState> {
    static navigationOptions = {
      headerShown: false,
    };
  
    constructor(props: IProps) {
      super(props);
  
      this.state = {
        username: '',
        password: '',
        isUsernameValid: true,
        isPasswordValid: true,
        isSnackbarVisible: false,
      };
    }

onUsernameChange = text => {
    this.setState({username: text});
    this.setState({isUsernameValid: true});
    };

onPasswordChange = text => {
this.setState({password: text});
this.setState({isPasswordValid: true});
};

 render() {
    return (
        <>
            <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor={'#996244'}
            translucent={false}
            />
            <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
            <Appbar.Header>
                <Appbar.BackAction
                onPress={() => {
                    this.props.navigation.goBack();
                }}
                />
                <Appbar.Content title="Change Password" />
            </Appbar.Header>

                    <ScrollView>
                    <View
                        style={{
                        marginHorizontal: 30,
                        marginBottom: 20,
                        marginTop: 30,
                        }}>
                        <TextInput
                        error={!this.state.isUsernameValid}
                        style={styles.textInput}
                        label="Username"
                        value={this.state.username}
                        onChangeText={text => this.onUsernameChange(text)}
                        />
                        <TextInput
                        error={!this.state.isPasswordValid}
                        style={styles.textInput}
                        label="Password"
                        value={this.state.password}
                        secureTextEntry
                        onChangeText={text => this.onPasswordChange(text)}
                        />
                    </View></ScrollView>
            <Snackbar
                duration={3000}
                visible={this.state.isSnackbarVisible}
                onDismiss={() => this.setState({isSnackbarVisible: false})}
                action={{
                label: 'Close',
                onPress: () => null,
                }}>
                Snackbar Message
            </Snackbar>
            </SafeAreaView>
        </>
        );
    }
}

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 5,
    backgroundColor: Colors.white,
    borderRadius: 3,
  },
  button: {
    margin: 5,
  },
});