import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import WeatherState from '../../../enums/weatherState';
import ShortCity from '../../../models/shortCity';
import ShortDayWeather from '../../../models/shortDayWeather';
import DayItem from './DayItem';

interface DaySelectionProps {
}

interface DaySelectionState {
  days: ShortDayWeather[];
  minTemperature: number;
  maxTemperature: number;
}

export default class DaySelection extends Component<DaySelectionProps, DaySelectionState> {
  constructor(props: DaySelectionProps) {
    super(props);
    const city: ShortCity = {
      id: 'ksamda',
      name: 'don\'t care',
      temperature: 123,
      weatherState: WeatherState.FOG,
    };
    const now = new Date();
    const days = [
      {
        city,
        date: new Date(now).setDate(now.getDate()),
        temperatureFrom: -2, temperatureTo: 8,
        weatherState: WeatherState.FOG,
      },
      {
        city,
        date: new Date(now).setDate(now.getDate() + 1),
        temperatureFrom: 2, temperatureTo: 12,
        weatherState: WeatherState.CLOUDY,
      },
      {
        city,
        date: new Date(now).setDate(now.getDate() + 2),
        temperatureFrom: -5, temperatureTo: 10,
        weatherState: WeatherState.RAINY,
      },
      {
        city,
        date: new Date(now).setDate(now.getDate() + 3),
        temperatureFrom: 6, temperatureTo: 12,
        weatherState: WeatherState.THUNDERSTORM,
      },
      {
        city,
        date: new Date(now).setDate(now.getDate() + 4),
        temperatureFrom: -4, temperatureTo: 5,
        weatherState: WeatherState.SNOWY,
      },
      {
        city,
        date: new Date(now).setDate(now.getDate() + 5),
        temperatureFrom: -1, temperatureTo: 8,
        weatherState: WeatherState.TORNADO,
      },
      {
        city,
        date: new Date(now).setDate(now.getDate() + 6),
        temperatureFrom: -2, temperatureTo: 8,
        weatherState: WeatherState.SUNNY,
      },{
        city,
        date: new Date(now).setDate(now.getDate() + 7),
        temperatureFrom: -2, temperatureTo: 8,
        weatherState: WeatherState.FOG,
      },
      {
        city,
        date: new Date(now).setDate(now.getDate() + 8),
        temperatureFrom: 2, temperatureTo: 12,
        weatherState: WeatherState.CLOUDY,
      },
      {
        city,
        date: new Date(now).setDate(now.getDate() + 9),
        temperatureFrom: -3, temperatureTo: 6,
        weatherState: WeatherState.RAINY,
      },
      {
        city,
        date: new Date(now).setDate(now.getDate() + 10),
        temperatureFrom: -2, temperatureTo: 7,
        weatherState: WeatherState.THUNDERSTORM,
      },
      {
        city,
        date: new Date(now).setDate(now.getDate() + 11),
        temperatureFrom: -4, temperatureTo: 5,
        weatherState: WeatherState.SNOWY,
      },
      {
        city,
        date: new Date(now).setDate(now.getDate() + 12),
        temperatureFrom: -1, temperatureTo: 8,
        weatherState: WeatherState.TORNADO,
      },
      {
        city,
        date: new Date(now).setDate(now.getDate() + 13),
        temperatureFrom: -2, temperatureTo: 8,
        weatherState: WeatherState.SUNNY,
      },
    ];
    const { min, max } = getMinMaxDisplayTemperature(days);
    this.state = {
      days,
      minTemperature: min,
      maxTemperature: max,
    };
  }

  render() {
    return (
      <>
        <ScrollView>
          {this.state.days.map((d, index) =>
            <DayItem
              key={index}
              minTemperature={this.state.minTemperature}
              maxTemperature={this.state.maxTemperature}
              item={d} />)}
        </ScrollView>
      </>
    );
  }
}

const getMinMaxDisplayTemperature = (days: ShortDayWeather[]): { min: number, max: number} => {
  let min = days[0].temperatureFrom;
  let max = days[0].temperatureTo;

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
