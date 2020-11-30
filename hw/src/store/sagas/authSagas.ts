import { authFailed } from '../actionCreators/auth';
import { AuthStartAction } from '../../models/store/actions/authActions';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import authService from '../../services/authService';
import { authSuccess } from '../actionCreators/auth';
import User from '../../models/user';
import { AUTH_START } from '../actionTypes/auth';
import delayedPromise from '../../helpers/delayedPromise';

function* onAuth(action: AuthStartAction) {
  try {
    const user: User = yield call(() => authService.authenticate(action.payload));
    // just for demo
    yield call(delayedPromise, null, null, 2000);
    if (user === null) {
      return yield put(authFailed('Invalid credentials'));
    }
    yield put(authSuccess(user));
  } catch (err) {
    yield put(authFailed('Authentication failed. Please try later'));
  }
}

export default function* authSagas() {
  yield all([
    takeLatest(AUTH_START, onAuth),
  ]);
}
