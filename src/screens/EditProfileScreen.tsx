import React, {Component} from 'react';
import {Text, View, StatusBar, SafeAreaView} from 'react-native';

export default class EditProfileScreen extends Component {
  static navigationOptions = {
    headerShown: false,
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
        <SafeAreaView style={{flex: 1}}>
          <View>
            <Text>tes</Text>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
