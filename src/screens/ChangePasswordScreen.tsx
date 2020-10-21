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
    oldPassword: string;
    newPassword: string;
    confirmNewPassword: string;
    isOldPasswordValid: boolean;
    isNewPasswordValid: boolean;
    isConfirmNewPasswordValid: boolean;
    isSnackbarVisible: boolean;
  }

export default class ChangePasswordScreen extends Component<IProps, IState> {
    static navigationOptions = {
      headerShown: false,
    };
  
    constructor(props) {
      super(props);
  
      this.state = {
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
        isOldPasswordValid: true,
        isNewPasswordValid: true,
        isConfirmNewPasswordValid: true,
        isSnackbarVisible: false,
      };
    }
  
    onOldPasswordChange = text => {
      this.setState({oldPassword: text});
      this.setState({isOldPasswordValid: true});
    };
  
    onNewPasswordChange = text => {
      this.setState({newPassword: text});
      this.setState({isNewPasswordValid: true});
    };
  
    onConfirmNewPasswordChange = (text, password) => {
      this.setState({confirmNewPassword: text});
      this.setState({
        isConfirmNewPasswordValid: true
      });
    };
  
    showSnackbar = msg => {
      this.snackbarMessage = msg;
      this.setState({isSnackbarVisible: true});
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
                  error={!this.state.isOldPasswordValid}
                  style={styles.textInput}
                  label="Old Password"
                  value={this.state.oldPassword}
                  secureTextEntry
                  onChangeText={text => this.onOldPasswordChange(text)}
                />
                <TextInput
                  error={!this.state.isNewPasswordValid}
                  style={styles.textInput}
                  label="New Password"
                  value={this.state.newPassword}
                  secureTextEntry
                  onChangeText={text => this.onNewPasswordChange(text)}
                />
                <TextInput
                  error={!this.state.isConfirmNewPasswordValid}
                  style={styles.textInput}
                  label="Confirm New Password"
                  value={this.state.confirmNewPassword}
                  secureTextEntry
                  onChangeText={text =>
                    this.onConfirmNewPasswordChange(text, this.state.newPassword)
                  }
                />
              </View>
            </ScrollView>
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