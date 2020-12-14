import { Reducer } from 'react';
import { WeatherDetailsActionTypes } from './../../models/store/actions/weatherDetailsActions';
import WeatherDetailsState from '../../models/store/states/weatherDetailsState';
import {
  WEATHER_DETAILS_GET_WEATHER_SUCCESS,
  WEATHER_DETAILS_GET_WEATHER,
} from '../actionTypes/weatherDetails';

export const initialState: WeatherDetailsState = {
  fetchingWeather: false,
  weather: null,
};

const weatherDetailsReducer: Reducer<WeatherDetailsState, WeatherDetailsActionTypes> =
  (state = initialState, action) => {

    switch (action.type) {
      case WEATHER_DETAILS_GET_WEATHER:
        return {
          ...state,
          fetchingWeather: true,
        };
      case WEATHER_DETAILS_GET_WEATHER_SUCCESS:
        return {
          ...state,
          fetchingWeather: false,
          weather: action.payload,
        };
      default: return state;
    }
  };

export default weatherDetailsReducer;
