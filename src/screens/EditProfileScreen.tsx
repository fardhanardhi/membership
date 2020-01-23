import React, {Component} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Appbar, Colors, TextInput, Button} from 'react-native-paper';
import {NavigationStackProp} from 'react-navigation-stack';

interface IProps {
  navigation: NavigationStackProp;
}

interface IState {
  fullName: string;
  phoneNumber: string;
  email: string;
}

export default class EditProfileScreen extends Component<IProps, IState> {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props: IProps) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      phoneNumber: '',
    };
  }

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
            <Appbar.Content title="Edit Profile" />
          </Appbar.Header>
          <ScrollView>
            <View
              style={{
                marginHorizontal: 30,
                marginBottom: 20,
                marginTop: 30,
              }}>
              <TextInput
                style={styles.textInput}
                label="Full Name"
                value={this.state.fullName}
                onChangeText={text => this.setState({fullName: text})}
              />
              <TextInput
                keyboardType="email-address"
                style={styles.textInput}
                label="Email"
                value={this.state.email}
                onChangeText={text => this.setState({email: text})}
              />
              <TextInput
                keyboardType="phone-pad"
                style={styles.textInput}
                label="Phone Number"
                value={this.state.phoneNumber}
                onChangeText={text => this.setState({phoneNumber: text})}
              />
            </View>
            <View
              style={{
                marginHorizontal: 25,
                paddingBottom: 30,
              }}>
              <Button
                style={styles.button}
                mode="contained"
                onPress={() => this.props.navigation.goBack()}>
                Save
              </Button>
            </View>
          </ScrollView>
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
