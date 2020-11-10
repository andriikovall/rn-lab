/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <Text style={styles.textHeader}> <Icon name="cloud" size={40} /> Something here</Text>
      </SafeAreaView>
    </>
  );
};


const styles = StyleSheet.create({
  textHeader: {
    fontSize: 32,
    padding: 10,
    paddingBottom: 15,
    margin: 5,
    fontFamily: 'PTS55F',
  }
})

export default App;
