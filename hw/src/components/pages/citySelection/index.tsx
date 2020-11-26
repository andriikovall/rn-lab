import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { StyleSheet, View } from 'react-native';
import ShortCity from '../../../models/shortCity';
import WeatherState from '../../../enums/weatherState';
import CitiesList from './CitiesList';
import { useNavigation } from '@react-navigation/native';
import useCityName from '../../../hooks/useCityName';


// openweather API doesn't have methods to show cities by query
// so I have to hardcode some values
const hardcodedCities: ShortCity[] = [
  { id: '1', name: 'Kyiv', temperature: 280, weatherState: WeatherState.CLOUDY },
  { id: '2', name: 'Kharkiv', temperature: 281, weatherState: WeatherState.THUNDERSTORM },
  { id: '3', name: 'Odessa', temperature: 281, weatherState: WeatherState.FOG },
];

export default function CitySelection() {
  const [cities] = useState<ShortCity[]>(hardcodedCities);
  const [filteredCities, setFilteredCities] = useState<ShortCity[]>([ ...hardcodedCities ]);
  const [, setCityName] = useCityName();
  const navigation = useNavigation();

  const onSearchChange = (input: string) => {
    const upperCasedInput = input.toUpperCase();
    const filtered = cities.filter(c => c?.name?.toUpperCase().includes(upperCasedInput));
    setFilteredCities(filtered);
  };

  const onCityPressed = (city: ShortCity) => {
    setCityName(city.name);
    navigation.navigate('WeatherDetails');
  };

  return (
    <View style={styles.container}>
      <SearchBar onChange={onSearchChange} nativeInputProps={{ placeholder: 'Find your city' }}/>
      <CitiesList cities={filteredCities} onCityPressed={onCityPressed} />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginBottom: 40,
  },
});

