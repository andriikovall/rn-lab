import { DAY_SELECTION_GET_DAYS, DAY_SELECTION_GET_DAYS_SUCCESS, DAY_SELECTION_GET_DAYS_FAILED } from './../actionTypes/daySelection';
import { GetDaysAction, GetDaysSuccessAction, GetDaysFailedAction } from './../../models/store/actions/daySelectionActions';
import ShortDayWeather from '../../models/shortDayWeather';
import { createError } from '../../models/error';

export const getDays = (cityName: string): GetDaysAction => ({
  type: DAY_SELECTION_GET_DAYS,
  payload: cityName,
});

export const getDaysSuccess = (days: ShortDayWeather[]): GetDaysSuccessAction => ({
  type: DAY_SELECTION_GET_DAYS_SUCCESS,
  payload: days,
});

export const getDaysFailed = (message: string): GetDaysFailedAction => ({
  type: DAY_SELECTION_GET_DAYS_FAILED,
  payload: createError({ title: 'Failed to get next days weather', message }),
});
