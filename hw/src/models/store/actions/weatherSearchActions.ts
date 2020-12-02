import { DAY_SELECTED } from './../../../store/actionTypes/weatherSearch';
import { CITY_SELECTED } from '../../../store/actionTypes/weatherSearch';
import { Action } from './action';

export type CitySelectedAction = Action<typeof CITY_SELECTED, string>;
export type DayOffsetSelectedAction = Action<typeof DAY_SELECTED, number>;

export type WeatherSearchActionTypes =
  CitySelectedAction |
  DayOffsetSelectedAction;
