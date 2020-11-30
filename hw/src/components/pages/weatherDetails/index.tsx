/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import Reload from './Reload';
import CityHeader from './CityHeader';
import TimeWeatherScrollList from './TimeWeatherScrollList';
import Humidity from './Humidity';
import Wind from './Wind';
import Sunrise from './Sunrise';
import Sunset from './Sunset';
import { useNavigation } from '@react-navigation/native';
import WeatherDetailsState from '../../../models/store/states/weatherDetailsState';
import { useDispatch, useSelector } from 'react-redux';
import AppState from '../../../models/store/appState';
import { getWeather } from '../../../store/actionCreators/weatherDetails';

export interface WeatherDetailsNavigationParams {
  dayOffset?: number;
}

export default function WeatherDetails() {
  const [lastReloadTime, setLastReloadTime] = useState<number>(Date.now());
  const navigation = useNavigation();
  const { weather } = useSelector<AppState, WeatherDetailsState>(state => state.weatherDetails);
  const dispatch = useDispatch();

  const loadWeather = async () => {
    dispatch(getWeather());
    setLastReloadTime(Date.now());
  };

  useEffect(() => {
    if (navigation.isFocused()) {
      loadWeather();
    }
  }, []);

  return (
    <ScrollView style={styles.container}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={loadWeather} />}>
      {weather &&
        <>
          <Reload lastReloadTime={lastReloadTime} />
          <CityHeader weather={weather} />
          <TimeWeatherScrollList items={weather.timeWeather} />
          <View style={styles.additionalWeatherSpecs}>
            <Humidity value={weather.humidity} />
            <Wind {...weather.wind} />
            <Sunrise time={weather.sunRise} />
            <Sunset value={weather.sunSet} />
          </View>
        </>}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
  additionalWeatherSpecs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
