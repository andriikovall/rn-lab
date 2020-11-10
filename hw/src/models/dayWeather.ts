import WeatherSummary from '../enums/weatherSummary';
import ShortCity from './shortCity';

export interface DayWeather extends ShortCity {
  city: ShortCity;
  date: number;
  // can be received in kelvins from server
  state: WeatherSummary;
  temperature: number;
  // from 0 to 100
  humidity: number;
  wind: {
      // degrees from 0 to 360
      direction: number;
      speed: number;
  },
  // minutes from 00-00
  sunRise: number;
  sunSet: number;
  timeWeather: {time: number; weather: WeatherSummary;}[]
}