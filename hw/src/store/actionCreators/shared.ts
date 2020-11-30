import { ERROR_OCURRED } from './../actionTypes/shared';
import { AppErrorOcurredAction } from './../../models/store/actions/sharedActions';
import AppError from '../../models/error';

export const errorOcurred = (err: AppError): AppErrorOcurredAction => ({
  type: ERROR_OCURRED,
  payload: err,
});
