import { Reducer } from 'react';
import { UPDATE_SETTINGS } from './../actionTypes/settings';
import { SettingsActionTypes } from './../../models/store/actions/settingsActions';
import TemperatureUnit from '../../enums/temperatureUnits';
import SettingsState from '../../models/store/states/settingsState';

export const initialState: SettingsState = {
  daysToShowWeatherFor: 5,
  minsToUpdateWeatherEvery: 15,
  temperatureUnits: TemperatureUnit.UNIT_CELSIUS,
};

const settingsReducer: Reducer<SettingsState, SettingsActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return {
        ...state,
        ...action.payload,
      };
    default: return state;
  }
};

export default settingsReducer;
