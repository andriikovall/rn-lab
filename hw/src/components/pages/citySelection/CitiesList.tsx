import React from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity } from 'react-native';
import ShortCity from '../../../models/shortCity';
import { AppText } from '../../shared/Text';
import City from './City';

interface CitiesListProps {
  cities: ShortCity[];
  onCityPressed: (city: ShortCity) => void;
}

export default function CitiesList({ cities, onCityPressed }: CitiesListProps) {
  const renderItem = ({ item }: { item: ShortCity }) =>
    <TouchableOpacity onPress={() => onCityPressed(item)}>
      <City city={item} />
    </TouchableOpacity>;

  const keyExtractor = (c: ShortCity) => c.id;
  return (
    <View style={styles.list}>
      {cities.length
        ? <FlatList data={cities} keyExtractor={keyExtractor} renderItem={renderItem} />
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
  list: {
    marginBottom: 60,
  },
});
