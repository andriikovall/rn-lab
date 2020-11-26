import ShortWeatherSummary from './shortWeatherSummary';
import WeatherDetails from './weatherDetails';

export default interface OpenweatherWeather {
  dt: number;
  main: WeatherDetails;
  weather: ShortWeatherSummary[];
  clouds: { all: number };
  wind: { speed: number, deg: number };
  visibility: number;
  // Probability of precipitation
  pop: number;
  sys: {
    // Part of the day
    pod: 'd' | 'n';
  };
  dt_txt: string;
};
