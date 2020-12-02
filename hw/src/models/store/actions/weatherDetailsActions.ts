import { Action } from './action';
import { DayWeather } from './../../dayWeather';
import { WEATHER_DETAILS_GET_WEATHER, WEATHER_DETAILS_GET_WEATHER_SUCCESS } from './../../../store/actionTypes/weatherDetails';

export type GetWeatherAction = Action<typeof WEATHER_DETAILS_GET_WEATHER>;
export type GetWeatherSuccessAction = Action<typeof WEATHER_DETAILS_GET_WEATHER_SUCCESS, DayWeather>;

export type WeatherDetailsActionTypes =
  GetWeatherAction |
  GetWeatherSuccessAction;
