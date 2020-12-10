/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import SearchBar from './SearchBar';
import { StyleSheet, View } from 'react-native';
import ShortCity from '../../../models/shortCity';
import CitiesList from './CitiesList';
import { useNavigation } from '@react-navigation/native';
import Loader from '../../shared/Loader';
import CitySelectionState from '../../../models/store/states/citySelectionState';
import { useDispatch, useSelector } from 'react-redux';
import AppState from '../../../models/store/appState';
import { getCities } from '../../../store/actionCreators/citySelection';
import { citySelected } from '../../../store/actionCreators/weatherSearch';
import useErrorHandler from '../../../hooks/useErrorHandler';
import routesNames from '../../routes/routesNames';

export default function CitySelection() {
  const { cities, fetchingCities, error } = useSelector<AppState, CitySelectionState>(state => state.citySelection);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const errorHandler = useErrorHandler();

  useEffect(() => {
    onSearchChange('');
  }, []);

  useEffect(() => {
    if (error) {
      errorHandler(error);
    }
  }, [error]);


  const onSearchChange = (input: string) => {
    dispatch(getCities(input));
  };

  const onCityPressed = (city: ShortCity) => {
    dispatch(citySelected(city.name));
    navigation.navigate(routesNames.WEATHER_DETAILS);
  };

  return (
    <View style={container}>
      <SearchBar onChange={onSearchChange} nativeInputProps={{ placeholder: 'Find your city' }} />
      <View style={citiesContainer}>
        <Loader overrideContextLoadingValue={fetchingCities} />
        <CitiesList cities={cities} onCityPressed={onCityPressed} loadingCities={fetchingCities} />
      </View>
    </View>
  );

}

const { container, citiesContainer } = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  citiesContainer: {
    height: '100%',
  },
});

