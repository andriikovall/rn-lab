import { AUTH_SUCCESS, AUTH_START, AUTH_FAILED } from './../actionTypes/auth';
import { AuthActionTypes } from './../../models/store/actions/authActions';
import AuthState from '../../models/store/states/authState';

const initialState: AuthState = {
  user: null,
  fetchingUser: false,
};

const authReducer = (state: AuthState = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        fetchingUser: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload,
        fetchingUser: false,
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
