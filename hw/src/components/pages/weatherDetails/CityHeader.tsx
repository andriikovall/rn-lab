import moment from 'moment';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { getReadableStateName } from '../../../enums/weatherState';
import textToTemperature from '../../../helpers/textToTemperature';
import { getMinutesFromTime } from '../../../helpers/time';
import { DayWeather } from '../../../models/dayWeather';
import { Title, Subtitle, AppText } from '../../shared/Text';
import SunStateIcon from './SunStateIcon';
import sharedStyles from '../../../helpers/styles';
import WeatherIcon from '../../shared/WeatherIcon';

interface CityHeaderProps {
  weather: DayWeather;
}

export default function CityHeader({ weather }: CityHeaderProps) {
  const weatherState: string = getReadableStateName(weather.city.weatherState);
  return (
    <View style={styles.cityHeader}>
      <Title>{weather.city.name.toUpperCase()}</Title>
      <Subtitle>{moment(weather.date).format('dddd, MMMM d').toUpperCase()}</Subtitle>
      <View style={styles.currentWeather}>
        <View style={styles.shortWeather}>
          <WeatherIcon state={weather.city.weatherState} style={styles.weatherIcon} size={90} />
          <View style={styles.weatherTemperature}>
            <AppText size={70}>{textToTemperature(weather.temperature.toString())}</AppText>
            <AppText size={14}>{weatherState && ('// ' + weatherState)}</AppText>
          </View>
        </View>
        <View style={styles.sunState}>
          <SunStateIcon
            style={styles.sunStateIcon}
            size={30}
            currentTime={getMinutesFromTime(new Date())}
            sunRise={weather.sunRise}
            sunSet={weather.sunSet} />
          <AppText size={18}>{moment(Date.now()).format('h:mm')}</AppText>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  cityHeader: {
    marginTop: 5,
    ...sharedStyles.bottomDivider,
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
