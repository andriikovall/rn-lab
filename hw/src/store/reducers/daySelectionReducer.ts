import { Reducer } from 'react';
import { DAY_SELECTION_GET_DAYS, DAY_SELECTION_GET_DAYS_SUCCESS, DAY_SELECTION_GET_DAYS_FAILED } from './../actionTypes/daySelection';
import { DaySelectionActionTypes } from './../../models/store/actions/daySelectionActions';
import DaySelectionState from '../../models/store/states/daySelectionState';

export const initialState: DaySelectionState = {
  days: [],
  fetchingDays: false,
};

const daySelectionReducer: Reducer<DaySelectionState, DaySelectionActionTypes> =
  (state = initialState, action) => {
    switch (action.type) {
      case DAY_SELECTION_GET_DAYS:
        return {
          ...state,
          fetchingDays: true,
        };
      case DAY_SELECTION_GET_DAYS_SUCCESS:
        return {
          ...state,
          fetchingDays: false,
          days: action.payload,
        };
      case DAY_SELECTION_GET_DAYS_FAILED:
        return {
          ...state,
          fetchingDays: false,
          error: action.payload,
        };
      default: return state;
    }
  };

export default daySelectionReducer;
