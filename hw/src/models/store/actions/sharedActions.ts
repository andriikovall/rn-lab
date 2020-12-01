import { LOADING_FINISHED } from './../../../store/actionTypes/shared';
import AppError from '../../error';
import { ERROR_OCURRED, LOADING_STARTED } from '../../../store/actionTypes/shared';
import { Action } from './action';

export type AppErrorOcurredAction = Action<typeof ERROR_OCURRED, AppError>;
export type AppLoadingStartedAction = Action<typeof LOADING_STARTED>;
export type AppLoadingFinishedAction = Action<typeof LOADING_FINISHED>;

export type SharedActionTypes =
  AppErrorOcurredAction |
  AppLoadingStartedAction |
  AppLoadingFinishedAction;
