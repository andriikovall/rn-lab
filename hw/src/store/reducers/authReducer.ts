import { AUTH_SUCCESS, AUTH_START, AUTH_FAILED } from './../actionTypes/auth';
import { AuthActionTypes } from './../../models/store/actions/authActions';
import AuthState from '../../models/store/states/authState';
import { Reducer } from 'react';

const initialState: AuthState = {
  user: null,
  fetchingUser: false,
};

const authReducer: Reducer<AuthState, AuthActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        fetchingUser: true,
        error: undefined,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload,
        fetchingUser: false,
        error: undefined,
      };
    case AUTH_FAILED:
      return {
        ...state,
        error: action.payload,
        fetchingUser: false,
      };
    default:
      return state;
  }
};

export default authReducer;
