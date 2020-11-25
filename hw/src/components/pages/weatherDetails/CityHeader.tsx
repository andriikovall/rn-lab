import moment from 'moment';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { getReadableStateName } from '../../../enums/weatherState';
import useNumberToTemperatureTextConverter from '../../../hooks/useNumberToTemperatureTextConverter';
import { DayWeather } from '../../../models/dayWeather';
import { Title, Subtitle, AppText } from '../../shared/Text';
import SunStateIcon from './SunStateIcon';
import WeatherIcon from '../../shared/WeatherIcon';
import BorderBottom from '../../shared/BorderBottom';

interface CityHeaderProps {
  weather: DayWeather;
}

export default function CityHeader({ weather }: CityHeaderProps) {
  const weatherStateName: string = getReadableStateName(weather.weatherState);
  const displayWeatherStateName = weatherStateName && ('// ' + weatherStateName);
  const cityName = weather.cityName.toUpperCase();
  const date = moment(weather.date).format('dddd, MMMM d').toUpperCase();
  const weatherState = weather.weatherState;
  const temperature = useNumberToTemperatureTextConverter(weather.temperature);
  const currentTime: string = moment(Date.now()).format('HH:mm');
  return (
    <BorderBottom style={styles.cityHeader}>
      <Title>{cityName}</Title>
      <Subtitle>{date}</Subtitle>
      <View style={styles.currentWeather}>
        <View style={styles.shortWeather}>
          <WeatherIcon state={weatherState} style={styles.weatherIcon} size={90} />
          <View style={styles.weatherTemperature}>
            <AppText size={70}>{temperature}</AppText>
            <AppText size={14}>{displayWeatherStateName}</AppText>
          </View>
        </View>
        <View style={styles.sunState}>
          <SunStateIcon
            style={styles.sunStateIcon}
            size={30}
            currentTime={Date.now()}
            sunRise={weather.sunRise}
            sunSet={weather.sunSet} />
          <AppText size={18}>{currentTime}</AppText>
        </View>
      </View>
    </BorderBottom>
  );
}


const styles = StyleSheet.create({
  cityHeader: {
    marginTop: 5,
  },
  currentWeather: {
    flexDirection: 'row',
    marginVertical: 35,
    paddingBottom: 10,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  shortWeather: {
    flexDirection: 'row',
  },
  weatherIcon: {
    marginRight: 30,
    alignSelf: 'center',
  },
  weatherTemperature: {
    // i think it's not ok to leave empty styles,
    // but i will do this for semantic and more clear understanding like classes in html
  },
  sunState: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  sunStateIcon: {
    marginBottom: 12,
  },
});
