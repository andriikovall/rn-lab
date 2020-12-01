import { all } from 'redux-saga/effects';
import authSagas from './authSagas';
import citySelectionSagas from './citySelectionSagas';
import daySelectionSagas from './daySelectionSagas';
import weatherDetailsSagas from './weatherDetailsSagas';

export default function* () {
  yield all([
    authSagas(),
    weatherDetailsSagas(),
    daySelectionSagas(),
    citySelectionSagas(),
  ]);
}
