import { WeatherSearchActionTypes } from './../../models/store/actions/weatherSearchActions';
import WeatherSearchState from '../../models/store/states/weatherSearchState';
import { DAY_SELECTED, CITY_SELECTED } from '../actionTypes/weatherSearch';

const initialState: WeatherSearchState = {
  cityName: 'Kyiv',
  dayOffset: 0,
};

const weatherSearchReducer =
  (state: WeatherSearchState = initialState, action: WeatherSearchActionTypes): WeatherSearchState => {
    switch (action.type) {
      case DAY_SELECTED:
        return {
          ...state,
          dayOffset: action.payload,
        };
      case CITY_SELECTED:
        return {
          ...state,
          cityName: action.payload,
        };
      default: return state;
    }
  };

export default weatherSearchReducer;
