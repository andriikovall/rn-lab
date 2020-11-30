import { DAY_SELECTION_GET_DAYS } from './../actionTypes/daySelection';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import ShortDayWeather from '../../models/shortDayWeather';
import AppState from '../../models/store/appState';
import WeatherSearchState from '../../models/store/states/weatherSearchState';
import weatherService from '../../services/weatherService';
import { getDaysSuccess, getDaysFailed } from '../actionCreators/daySelection';
import SettingsState from '../../models/store/states/settingsState';

function* getDaysWeather() {
  const { cityName }: WeatherSearchState = yield select((state: AppState) => state.weatherSearch);
  const { daysToShowWeatherFor }: SettingsState = yield select((state: AppState) => state.settings);
  try {
    const days: ShortDayWeather[] = yield call(() => weatherService.getShortDaysWeather(cityName));
    yield put(getDaysSuccess(days.slice(0, daysToShowWeatherFor)));
  } catch (error) {
    yield put(getDaysFailed(error.message));
  }
}

export default function* () {
  yield all([
    takeLatest(DAY_SELECTION_GET_DAYS, getDaysWeather),
  ]);
}
