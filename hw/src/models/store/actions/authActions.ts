import { Action } from './action';
import AppError from '../../error';
import LoginCredentials from '../../loginCredentials';
import User from '../../user';
import { AUTH_START, AUTH_SUCCESS, AUTH_FAILED } from './../../../store/actionTypes/auth';

export type AuthStartAction = Action<typeof AUTH_START, LoginCredentials>;
export type AuthSuccessAction = Action<typeof AUTH_SUCCESS, User>;
export type AuthFailedAction = Action<typeof AUTH_FAILED, AppError>;

export type AuthActionTypes =
  AuthStartAction |
  AuthSuccessAction |
  AuthFailedAction;
