import { CITIES_GET, CITIES_GET_FAILED, CITIES_GET_SUCCESS } from '../../../store/actionTypes/citySelection';
import AppError from '../../error';
import ShortCity from '../../shortCity';
import { Action } from './action';

export type GetCitiesAction = Action<typeof CITIES_GET, string>;
export type GetCitiesSuccessAction = Action<typeof CITIES_GET_SUCCESS, ShortCity[]>;
export type GetCitiesFailedAction = Action<typeof CITIES_GET_FAILED, AppError>;

export type CitySelectionActionTypes =
  GetCitiesAction |
  GetCitiesSuccessAction |
  GetCitiesFailedAction;
