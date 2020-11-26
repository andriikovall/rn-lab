/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import useCityName from '../../../hooks/useCityName';
import useLoading from '../../../hooks/useLoading';
import useErrorHandler from '../../../hooks/useErrorHandler';
import useNavParams from '../../../hooks/useNavParams';

export interface WeatherDetailsNavigationParams {
  dayOffset?: number;
}

export default function WeatherDetails() {
  const [weather, setWeather] = useState<DayWeather | null>(null);
  const [lastReloadTime, setLastReloadTime] = useState<number>(Date.now());
  const navigation = useNavigation();

  const dayOffset = useNavParams<WeatherDetailsNavigationParams>()?.dayOffset || 0;
  const [cityName] = useCityName();
  const { setIsLoading } = useLoading();

  // I know that it's better to move all text literals into a separate config file,
  // but I will leave it here for simplicity
  const errorHandler = useErrorHandler();

  const loadWeather = async () => {
    setIsLoading(true);
    try {
      const loadedWeather = await weatherService.getDayWeather(cityName, dayOffset);
      setWeather(loadedWeather);
      setIsLoading(false);
      setLastReloadTime(Date.now());
    } catch (err) {
      errorHandler(err, { errorTitle: 'Failed to load weather', errorMessage: 'Try again later' });
    }
  };

  useEffect(() => {
    if (navigation.isFocused()) {
      loadWeather();
    }
  }, []);

  return (
    <>
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
    </>
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
