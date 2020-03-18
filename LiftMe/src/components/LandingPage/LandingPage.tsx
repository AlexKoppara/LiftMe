import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLogIn from '../SignUpLoginIn/SignUpLogIn';

export default function LandingPage() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Landing Page</Text>
      <SignUpLogIn></SignUpLogIn>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
