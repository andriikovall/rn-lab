import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginForm from './LoginForm';

interface LoginProps {
}

interface LoginState {
}

export default class Login extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <LoginForm />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  }
});
