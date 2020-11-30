import { AuthStartAction, AuthFailedAction, AuthSuccessAction } from './../../models/store/actions/authActions';
import { AUTH_START, AUTH_FAILED, AUTH_SUCCESS } from './../actionTypes/auth';
import LoginCredentials from '../../models/loginCredentials';
import { createError } from '../../models/error';
import User from '../../models/user';

export const authenticate = (creds: LoginCredentials): AuthStartAction => ({
  type: AUTH_START,
  payload: creds,
});

export const authFailed = (message: string): AuthFailedAction => ({
  type: AUTH_FAILED,
  payload: createError({ title: 'Failed to log in', message }),
});

export const authSuccess = (user: User): AuthSuccessAction => ({
  type: AUTH_SUCCESS,
  payload: user,
});
