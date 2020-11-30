import { Reducer } from 'react';
import { ERROR_OCURRED, LOADING_STARTED, LOADING_FINISHED } from './../actionTypes/shared';
import { SharedActionTypes } from './../../models/store/actions/sharedActions';
import SharedState from '../../models/store/states/sharedState';

const initialState: SharedState = {
  loading: false,
};

const sharedReducer: Reducer<SharedState, SharedActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_OCURRED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case LOADING_STARTED:
      return {
        ...state,
        loading: true,
      };
    case LOADING_FINISHED:
      return {
        ...state,
        loading: false,
      };
    default: return state;
  }
};

export default sharedReducer;
