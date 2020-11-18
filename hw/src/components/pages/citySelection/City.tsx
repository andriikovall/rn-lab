import React from 'react';
import { StyleSheet, View } from 'react-native';
import { getReadableStateName } from '../../../enums/weatherState';
import ShortCity from '../../../models/shortCity';
import { AppText, AppTextSecondary } from '../../shared/Text';
import textToTemperature from '../../../helpers/textToTemperature';
import BorderBottom from '../../shared/BorderBottom';

interface CityProps {
  city: ShortCity;
}

export default function City({ city }: CityProps) {
  const weatherState: string = getReadableStateName(city.weatherState);
  const temperature: string = textToTemperature(city.temperature.toString());
  const weatherStateString: string = weatherState && ('// ' + weatherState.toUpperCase());
  return (
    <BorderBottom style={styles.container}>
      <View style={styles.temperature}>
        <AppText size={60}>{temperature}</AppText>
      </View>
      <View style={styles.details}>
        <AppText>{city.name}</AppText>
        <AppTextSecondary size={20}>{weatherStateString}</AppTextSecondary>
      </View>
    </BorderBottom>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  temperature: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
  },
  details: {
    justifyContent: 'center',
    flex: 4,
  },
});
