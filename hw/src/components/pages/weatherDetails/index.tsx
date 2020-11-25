/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import { DayWeather } from '../../../models/dayWeather';
import Reload from './Reload';
import CityHeader from './CityHeader';
import TimeWeatherScrollList from './TimeWeatherScrollList';
import Humidity from './Humidity';
import Wind from './Wind';
import Sunrise from './Sunrise';
import Sunset from './Sunset';
import weatherService from '../../../services/weatherService';
import loadingContext from '../../../contexts/loading';
import { useNavigation, useRoute } from '@react-navigation/native';

interface WeatherDetailsNavigationParams {
  dayOffset: number;
}

export default function WeatherDetails() {
  const [weather, setWeather] = useState<DayWeather | null>(null);
  const [lastReloadTime, setLastReloadTime] = useState<number>(Date.now());
  const navigation = useNavigation();
  const route = useRoute();
  const [dayOffset] =
  useState<number>((route.params as WeatherDetailsNavigationParams)?.dayOffset as number || 0);

  const { setIsLoading } = useContext(loadingContext);


  const loadWeather = async () => {
    setIsLoading(true);
    const loadedWeather = await weatherService.getDayWeather('Kyiv', dayOffset);
    setWeather(loadedWeather);
    setIsLoading(false);
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
      { weather !== null ?
        <>
          <Reload lastReloadTime={lastReloadTime}/>
          <CityHeader weather={weather} />
          <TimeWeatherScrollList items={weather.timeWeather} />
          <View style={styles.additionalWeatherSpecs}>
            <Humidity value={weather.humidity} />
            <Wind {...weather.wind} />
            <Sunrise time={weather.sunRise} />
            <Sunset value={weather.sunSet} />
          </View>
        </>
        : null}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  additionalWeatherSpecs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
