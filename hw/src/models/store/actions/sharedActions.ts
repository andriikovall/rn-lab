import AppError from '../../error';
import { ERROR_OCURRED } from '../../../store/actionTypes/shared';
import { Action } from './action';

export type AppErrorOcurredAction = Action<typeof ERROR_OCURRED, AppError>;

export type SharedActionTypes = AppErrorOcurredAction;
