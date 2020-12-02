import { Reducer } from 'react';
import { CITIES_GET, CITIES_GET_FAILED, CITIES_GET_SUCCESS } from './../actionTypes/citySelection';
import { CitySelectionActionTypes } from './../../models/store/actions/citySelection';
import CitySelectionState from '../../models/store/states/citySelectionState';

const initialState: CitySelectionState = {
  cities: [],
  fetchingCities: false,
};

const citySelectionReducer: Reducer<CitySelectionState, CitySelectionActionTypes> =
  (state = initialState, action) => {
    switch (action.type) {
      case CITIES_GET:
        return {
          ...state,
          fetchingCities: true,
        };
      case CITIES_GET_FAILED:
        return {
          ...state,
          fetchingCities: false,
          error: action.payload,
        };
      case CITIES_GET_SUCCESS:
        return {
          ...state,
          fetchingCities: false,
          cities: action.payload,
        };
      default: return state;
    }
  };

export default citySelectionReducer;
