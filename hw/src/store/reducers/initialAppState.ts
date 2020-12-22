import AppState from '../../models/store/appState';
import { initialState as initialAuthState } from './authReducer';
import { initialState as initialCitySelectionState } from './citySelectionReducer';
import { initialState as initialDaySelectionState } from './daySelectionReducer';
import { initialState as initialSettingsState } from './settingsReducer';
import { initialState as initialSharedState } from './sharedReducer';
import { initialState as initialWeatherDetails } from './weatherDetailsReducer';
import { initialState as initialWeatherSearchState } from './weatherSearchReducer';

const initialAppState: AppState = {
  auth: initialAuthState,
  citySelection: initialCitySelectionState,
  daySelection: initialDaySelectionState,
  settings: initialSettingsState,
  shared: initialSharedState,
  weatherDetails: initialWeatherDetails,
  weatherSearch: initialWeatherSearchState,
};

export default initialAppState;
