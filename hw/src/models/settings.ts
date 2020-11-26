import TemperatureUnit from '../enums/temperatureUnits';

export default interface Settings {
  temperatureUnits: TemperatureUnit;
  daysToShowWeatherFor: number;
  minsToUpdateWeatherEvery: number;
  cityName: string;
};
