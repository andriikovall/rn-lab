import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import CitySelection from './src/components/pages/citySelection';

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <View style={styles.wrapper}>
          <CitySelection />
          {/* <Title>{'Kharkiv'.toUpperCase()}</Title>
          <Subtitle>MONDAY, NOVEMBER 3</Subtitle>
          <AppText>Some small text here</AppText> */}
        </View>
      </SafeAreaView>
    </>
  );
};


const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#080B24',
    height: '100%',
  },
});

export default App;
