import React from 'react';
import { StyleSheet, View } from 'react-native';
import ShortCity from '../../../models/shortCity';
import { AppText } from '../../shared/Text';
import City from './City';

interface CitiesListProps {
  cities: ShortCity[];
}

export default function CitiesList({ cities }: CitiesListProps) {
  return (
    <View>
      {cities.length
        ? cities.map(c => (<City key={c.id} city={c}/>))
        : <NotFoundText />}
    </View>
  );
}

function NotFoundText() {
  return (
    <View style={styles.error}>
      <AppText>No cities found</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 50,
  },
});
