import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import CitySelection from './src/components/pages/citySelection';
import DaySelection from './src/components/pages/daySelection';
import WeatherDetails from './src/components/pages/weatherDetails';

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <View style={styles.wrapper}>
          {/* <CitySelection /> */}
          {/* <WeatherDetails /> */}
          <DaySelection />
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
