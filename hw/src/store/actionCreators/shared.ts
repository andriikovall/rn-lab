import { ERROR_OCURRED, LOADING_FINISHED, LOADING_STARTED } from './../actionTypes/shared';
import { AppErrorOcurredAction, AppLoadingFinishedAction, AppLoadingStartedAction } from './../../models/store/actions/sharedActions';
import AppError from '../../models/error';

export const errorOcurred = (err: AppError): AppErrorOcurredAction => ({
  type: ERROR_OCURRED,
  payload: err,
});

export const startAppLoading = (): AppLoadingStartedAction => ({
  type: LOADING_STARTED,
  payload: undefined,
});

export const finishAppLoading = (): AppLoadingFinishedAction => ({
  type: LOADING_FINISHED,
  payload: undefined,
});
