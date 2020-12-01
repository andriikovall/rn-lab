import AuthState from './states/authState';
import CitySelectionState from './states/citySelectionState';
import DaySelectionState from './states/daySelectionState';
import SettingsState from './states/settingsState';
import SharedState from './states/sharedState';
import WeatherDetailsState from './states/weatherDetailsState';
import WeatherSearchState from './states/weatherSearchState';

export default interface AppState {
  auth: AuthState;
  settings: SettingsState;
  weatherDetails: WeatherDetailsState;
  daySelection: DaySelectionState;
  weatherSearch: WeatherSearchState;
  shared: SharedState;
  citySelection: CitySelectionState;
};
