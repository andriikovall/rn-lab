import { CITY_SELECTED, DAY_SELECTED } from './../actionTypes/weatherSearch';
import { CitySelectedAction, DayOffsetSelectedAction } from '../../models/store/actions/weatherSearchActions';

export const daySelected = (dayOffset: number): DayOffsetSelectedAction => ({
  type: DAY_SELECTED,
  payload: dayOffset,
});

export const citySelected = (cityName: string): CitySelectedAction => ({
  type: CITY_SELECTED,
  payload: cityName,
});
