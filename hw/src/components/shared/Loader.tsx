import React, { useContext, useRef } from 'react';
import { ActivityIndicator, Animated, StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import loadingContext from '../../contexts/loading';
import WeatherState from '../../enums/weatherState';
import WeatherIcon from './WeatherIcon';

export default function Loader() {

  const { isLoading } = useContext(loadingContext);

  const containerOpacityAndZIndex = useRef(new Animated.Value(0)).current;
  const loaderScale = useRef(new Animated.Value(0)).current;

  Animated.timing(containerOpacityAndZIndex, {
    toValue: isLoading ? 1 : 0,
    duration: 300,
    useNativeDriver: true,
  }).start();

  Animated.loop(
    Animated.sequence(
      [
        Animated.timing(loaderScale, {
          toValue: isLoading ? 2 : 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(loaderScale, {
          toValue: isLoading ? 1 : 2,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]
    )
  ).start();

  return (
    <Animated.View style={[
      styles.container,
      { opacity: containerOpacityAndZIndex },
      { zIndex: containerOpacityAndZIndex },
    ]}>
      <Animated.View style={{ transform: [{ scale: loaderScale }] }}>
        {/* <ActivityIndicator size="large" color={colors.colorPrimary} /> */}
        <WeatherIcon state={WeatherState.SUNNY} size={30} />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.colorLoaderBg,
    alignItems: 'center',
    justifyContent: 'center',
    // zIndex: 0,
  },
});
