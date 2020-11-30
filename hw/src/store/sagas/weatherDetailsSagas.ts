import { errorOcurred, startAppLoading, finishAppLoading } from './../actionCreators/shared';
import { getWeatherSuccess } from './../actionCreators/weatherDetails';
import { select, call, put, all, takeLatest } from 'redux-saga/effects';
import AppState from '../../models/store/appState';
import WeatherSearchState from '../../models/store/states/weatherSearchState';
import weatherService from '../../services/weatherService';
import { DayWeather } from './../../models/dayWeather';
import { createError } from '../../models/error';
import { WEATHER_DETAILS_GET_WEATHER } from '../actionTypes/weatherDetails';


function* getDayWeather () {
  const { dayOffset, cityName }: WeatherSearchState = yield select((state: AppState) => state.weatherSearch);
  yield put(startAppLoading());
  try {
    const weather: DayWeather = yield call(() => weatherService.getDayWeather(cityName, dayOffset));
    yield put(getWeatherSuccess(weather));
  } catch (err) {
    yield put(errorOcurred(createError({ message: 'Failed to get weather'})));
  }
  yield put(finishAppLoading());
}

export default function* () {
  yield all([
    takeLatest(WEATHER_DETAILS_GET_WEATHER, getDayWeather),
  ]);
}
