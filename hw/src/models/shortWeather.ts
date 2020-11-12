import WeatherState from '../enums/weatherState';

export default interface ShortWeather {
  state: WeatherState;
  temperature: number;
};
