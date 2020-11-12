import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { ScrollView, StyleSheet, View } from 'react-native';
import ShortCity from '../../../models/shortCity';
import WeatherState from '../../../enums/weatherState';
import CitiesList from './CitiesList';


interface CitySelectionProps {
}

interface CitySelectionState {
  name: string,
  cities: ShortCity[],
  filteredCities: ShortCity[];
}

export default class CitySelection extends Component<CitySelectionProps, CitySelectionState> {

  constructor(props: CitySelectionProps) {
    super(props);

    const cities: ShortCity[] = [
      { id: '1', name: 'Pnom Pen', temperature: 32, weatherState: WeatherState.CLOUDY },
      { id: '2', name: 'Angularia', temperature: 29, weatherState: WeatherState.THUNDERSTORM },
      { id: '3', name: 'Vueland', temperature: 18, weatherState: WeatherState.UNSET },
      { id: '4', name: 'Nodia', temperature: 16, weatherState: WeatherState.SUNNY },
      { id: '5', name: 'Typo gorod', temperature: 19, weatherState: WeatherState.TORNADO },
      { id: '6', name: 'Vueland', temperature: 18, weatherState: WeatherState.UNSET },
      { id: '7', name: 'Nodia', temperature: 16, weatherState: WeatherState.SUNNY },
      { id: '8', name: 'Typo gorod', temperature: 19, weatherState: WeatherState.TORNADO },
      { id: '9', name: 'Vueland', temperature: 18, weatherState: WeatherState.UNSET },
      { id: '0', name: 'Nodia', temperature: 16, weatherState: WeatherState.SUNNY },
      { id: '10', name: 'Typo gorod', temperature: 19, weatherState: WeatherState.TORNADO },
    ];

    this.state = {
      name: '',
      cities: cities,
      filteredCities: [...cities],
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(name: string) {
    const upperCasedInput = name.toUpperCase();
    const filtered = this.state.cities.filter(c => c?.name?.toUpperCase().includes(upperCasedInput));
    this.setState({ filteredCities: filtered });
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar onChange={this.onSearchChange} nativeInputProps={{placeholder: 'Find your city'}}/>
        <ScrollView>
          <CitiesList cities={this.state.filteredCities} />
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginBottom: 40,
  },
  citiesList: {

  },
});

