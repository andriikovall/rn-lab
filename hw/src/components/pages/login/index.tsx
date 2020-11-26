import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginForm from './LoginForm';


export default function Login() {
  return (
    <>
      <View style={styles.container}>
        <LoginForm />
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
});
