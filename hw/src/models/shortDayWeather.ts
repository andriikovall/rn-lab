import WeatherState from '../enums/weatherState';
import ShortCity from './shortCity';

export default interface ShortDayWeather {
  city: ShortCity;
  temperatureFrom: number;
  temperatureTo: number;
  date: number;
  weatherState: WeatherState;
};
