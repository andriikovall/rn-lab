import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import WeatherState from '../../../enums/weatherState';
import { DayWeather } from '../../../models/dayWeather';
import Reload from './Reload';
import CityHeader from './CityHeader';
import TimeWeatherScrollList from './TimeWeatherScrollList';
import Humidity from './Humidity';
import Wind from './Wind';
import Sunrise from './Sunrise';
import Sunset from './Sunset';

interface WeatherDetailsProps {
}

interface WeatherDetailsState {
  weather: DayWeather;
}


export default class WeatherDetails extends Component<WeatherDetailsProps, WeatherDetailsState> {

  constructor(props: WeatherDetailsProps) {
    super(props);
    const weather: DayWeather = {
      name: 'string',
      weatherState: WeatherState.SNOWY,
      temperature: 1,
      id: 'sadasdasdas',
      city: {
        id: 'klmrb',
        name: 'Kharkiv',
        temperature: -2,
        weatherState: WeatherState.MOSTLY_CLOUDY,
      },
      wind: {
        direction: 165,
        speed: 5,
      },
      date: Date.now(),
      humidity: 50,
      sunRise: 463,
      sunSet: 700,
      timeWeather: [
        { time: 360, weather: { state: WeatherState.THUNDERSTORM, temperature: -2 }},
        { time: 420, weather: { state: WeatherState.SNOWY, temperature: 0 } },
        { time: 480, weather: { state: WeatherState.CLOUDY, temperature: -2 } },
        { time: 540, weather: { state: WeatherState.SUNNY, temperature: 1 } },
        { time: 600, weather: { state: WeatherState.TORNADO, temperature: 0 } },
        { time: 360, weather: { state: WeatherState.FOG, temperature: 0 } },
        { time: 360, weather: { state: WeatherState.MOSTLY_CLOUDY, temperature: 0 } },
        { time: 360, weather: { state: WeatherState.MOSTLY_SUNNY, temperature: 0 } },
        { time: 360, weather: { state: WeatherState.FOG, temperature: 0 } },
        { time: 360, weather: { state: WeatherState.TORNADO, temperature: 0 } },
        { time: 360, weather: { state: WeatherState.SNOWY, temperature: 1 } },
        { time: 360, weather: { state: WeatherState.SNOWY, temperature: 1 } },
        { time: 360, weather: { state: WeatherState.SNOWY, temperature: 1 } },
        { time: 360, weather: { state: WeatherState.TORNADO, temperature: 0 } },
        { time: 360, weather: { state: WeatherState.MOSTLY_CLOUDY, temperature: 0 } },
        { time: 360, weather: { state: WeatherState.SNOWY, temperature: 1 } },
        { time: 360, weather: { state: WeatherState.TORNADO, temperature: 0 } },
        { time: 360, weather: { state: WeatherState.MOSTLY_CLOUDY, temperature: 0 } },
        { time: 360, weather: { state: WeatherState.MOSTLY_CLOUDY, temperature: 0 } },
      ],
    };

    for (let i = 6; i < weather.timeWeather.length; i++) {
      weather.timeWeather[i].time = 60 * i;
    }

    this.state = {
      weather,
    };
  }


  render() {
    const { weather } = this.state;
    return (
      <View style={styles.container}>
        <Reload />
        <CityHeader weather={weather} />
        <TimeWeatherScrollList items={weather.timeWeather} />
        <View style={styles.additionalWeatherSpecs}>
          <Humidity value={weather.humidity} />
          <Wind {...weather.wind } />
          <Sunrise value={weather.sunRise} />
          <Sunset value={weather.sunSet} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  additionalWeatherSpecs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
