import WeatherState from '../enums/weatherState';

export default interface ShortCity {
  id: string;
  name: string;
  temperature: number;
  weatherState: WeatherState;
};
