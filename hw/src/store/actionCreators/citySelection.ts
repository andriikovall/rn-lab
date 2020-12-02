import { CITIES_GET, CITIES_GET_FAILED, CITIES_GET_SUCCESS } from './../actionTypes/citySelection';
import { GetCitiesAction, GetCitiesFailedAction, GetCitiesSuccessAction } from './../../models/store/actions/citySelection';
import ShortCity from '../../models/shortCity';
import { createError } from '../../models/error';

export const getCities = (query: string): GetCitiesAction => ({
  type: CITIES_GET,
  payload: query,
});

export const getCitiesSuccess = (cities: ShortCity[]): GetCitiesSuccessAction => ({
  type: CITIES_GET_SUCCESS,
  payload: cities,
});

export const getCitiesFiled = (): GetCitiesFailedAction => ({
  type: CITIES_GET_FAILED,
  payload: createError({ title: 'Failed to get cities', message: 'Please, try again' }),
});
