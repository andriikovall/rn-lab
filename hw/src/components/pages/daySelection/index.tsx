/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, TouchableOpacity } from 'react-native';
import delayedPromise from '../../../helpers/delayedPromise';
import useCityName from '../../../hooks/useCityName';
import useErrorHandler from '../../../hooks/useErrorHandler';
import useSettings from '../../../hooks/useSettings';
import ShortDayWeather from '../../../models/shortDayWeather';
import weatherService from '../../../services/weatherService';
import Loader from '../../shared/Loader';
import { WeatherDetailsNavigationParams } from '../weatherDetails';
import DayItem from './DayItem';


export default function DaySelection() {
  const [days, setDays] = useState<ShortDayWeather[] | null>(null);
  const [minTemperature, setMinTemperature] = useState<number>(0);
  const [maxTemperature, setMaxTemperature] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation = useNavigation();
  const [cityName] = useCityName();
  const { settings } = useSettings();
  const errorHandler = useErrorHandler({ errorTitle: 'Failed to load days' });

  useEffect(() => {
    loadDays();
  }, []);

  const loadDays = async () => {
    setIsLoading(true);
    try {
      const responseDays = (await weatherService.getShortDaysWeather(cityName))
        .slice(0, settings.daysToShowWeatherFor);
      await delayedPromise(null, null, 1000);
      setDays(responseDays);
      const { min, max } = getMinMaxDisplayTemperature(responseDays);
      setMinTemperature(min);
      setMaxTemperature(max);
    } catch (err) {
      errorHandler(err);
    }
    setIsLoading(false);
  };

  const onDayPress = (index: number) => {
    navigation.navigate('WeatherDetails', { dayOffset: index } as WeatherDetailsNavigationParams);
  };

  return (
    <>
      <Loader overrideContextLoadingValue={isLoading} />
      <ScrollView refreshControl={<RefreshControl refreshing={false} onRefresh={loadDays} />}>
        {days?.map((d, index) =>
          <TouchableOpacity key={index} activeOpacity={0.5} onPress={() => onDayPress(index)}>
            <DayItem
              minTemperature={minTemperature}
              maxTemperature={maxTemperature}
              item={d} />
          </TouchableOpacity>)}
      </ScrollView>
    </>
  );
}

const getMinMaxDisplayTemperature = (days: ShortDayWeather[]): { min: number, max: number } => {
  let min = days[0]?.temperatureFrom;
  let max = days[0]?.temperatureTo;

  for (const day of days) {
    if (day.temperatureFrom < min) {
      min = day.temperatureFrom;
    }
    if (day.temperatureTo > max) {
      max = day.temperatureTo;
    }
  }

  return { min, max };
};
