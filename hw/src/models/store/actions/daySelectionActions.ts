import { DAY_SELECTION_GET_DAYS, DAY_SELECTION_GET_DAYS_FAILED, DAY_SELECTION_GET_DAYS_SUCCESS } from '../../../store/actionTypes/daySelection';
import AppError from '../../error';
import ShortDayWeather from '../../shortDayWeather';
import { Action } from './action';

export type GetDaysAction = Action<typeof DAY_SELECTION_GET_DAYS>;
export type GetDaysSuccessAction = Action<typeof DAY_SELECTION_GET_DAYS_SUCCESS, ShortDayWeather[]>;
export type GetDaysFailedAction = Action<typeof DAY_SELECTION_GET_DAYS_FAILED, AppError>;

export type DaySelectionActionTypes =
  GetDaysAction |
  GetDaysSuccessAction |
  GetDaysFailedAction;
