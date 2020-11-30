import { Reducer } from 'react';
import { combineReducers } from 'redux';
import AppState from '../../models/store/appState';

import authReducer from './authReducer';
import citySelectionReducer from './citySelectionReducer';
import daySelectionReducer from './daySelectionReducer';
import settingsReducer from './settingsReducer';
import sharedReducer from './sharedReducer';
import weatherDetailsReducer from './weatherDetailsReducer';
import weatherSearchReducer from './weatherSearchReducer';

type WithAppStateKeys = {
  [K in keyof AppState]: Reducer<any, any>;
};

const rootReducer = combineReducers({
  auth: authReducer,
  daySelection: daySelectionReducer,
  settings: settingsReducer,
  shared: sharedReducer,
  weatherDetails: weatherDetailsReducer,
  weatherSearch: weatherSearchReducer,
  citySelection: citySelectionReducer,
} as WithAppStateKeys);

export default rootReducer;
