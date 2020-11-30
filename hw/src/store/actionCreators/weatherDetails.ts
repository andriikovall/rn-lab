import { DayWeather } from './../../models/dayWeather';
import { WEATHER_DETAILS_GET_WEATHER, WEATHER_DETAILS_GET_WEATHER_SUCCESS } from './../actionTypes/weatherDetails';
import { GetWeatherAction, GetWeatherSuccessAction } from './../../models/store/actions/weatherDetailsActions';

export const getWeather = (): GetWeatherAction => ({
  type: WEATHER_DETAILS_GET_WEATHER,
  payload: undefined,
});

export const getWeatherSuccess = (weather: DayWeather): GetWeatherSuccessAction => ({
  type: WEATHER_DETAILS_GET_WEATHER_SUCCESS,
  payload: weather,
});
