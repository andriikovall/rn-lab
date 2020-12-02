import TemperatureUnit from '../../../enums/temperatureUnits';

export default interface SettingsState {
  temperatureUnits: TemperatureUnit;
  daysToShowWeatherFor: number;
  minsToUpdateWeatherEvery: number;
};
