import { DayWeather } from '../../dayWeather';

export default interface WeatherDetailsState {
  fetchingWeather: boolean;
  weather: DayWeather | null;
};
