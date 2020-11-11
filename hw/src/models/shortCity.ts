import WeatherSummary from '../enums/weatherSummary';

export default interface ShortCity {
  id: string;
  name: string;
  temperature: number;
  weatherState: WeatherSummary;
};
