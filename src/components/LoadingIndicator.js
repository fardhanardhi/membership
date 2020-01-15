import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating size={60} />
    </View>
  );
};

export default LoadingIndicator;
