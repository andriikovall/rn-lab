/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { RefreshControl, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import useErrorHandler from '../../../hooks/useErrorHandler';
import ShortDayWeather from '../../../models/shortDayWeather';
import AppState from '../../../models/store/appState';
import DaySelectionState from '../../../models/store/states/daySelectionState';
import { getDays } from '../../../store/actionCreators/daySelection';
import { daySelected } from '../../../store/actionCreators/weatherSearch';
import Loader from '../../shared/Loader';
import DayItem from './DayItem';


export default function DaySelection() {
  const navigation = useNavigation();
  const errorHandler = useErrorHandler({ errorTitle: 'Failed to load days' });

  const dispatch = useDispatch();
  const { fetchingDays, days, error } = useSelector<AppState, DaySelectionState>(state => state.daySelection);
  if (error) {
    errorHandler(error);
  }

  const { min, max } = getMinMaxDisplayTemperature(days);

  useEffect(() => {
    loadDays();
  }, []);

  const loadDays = () => {
    dispatch(getDays());
  };

  const onDayPress = (index: number) => {
    dispatch(daySelected(index));
    navigation.navigate('WeatherDetails');
  };

  return (
    <>
      <Loader overrideContextLoadingValue={fetchingDays} />
      <ScrollView refreshControl={<RefreshControl refreshing={false} onRefresh={loadDays} />}>
        {days?.map((d, index) =>
          <TouchableOpacity key={index} activeOpacity={0.5} onPress={() => onDayPress(index)}>
            <DayItem
              minTemperature={min}
              maxTemperature={max}
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
