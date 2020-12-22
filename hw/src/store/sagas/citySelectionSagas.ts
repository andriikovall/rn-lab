import { getCitiesSuccess } from './../actionCreators/citySelection';
import { GetCitiesAction } from './../../models/store/actions/citySelection';
import WeatherState from '../../enums/weatherState';
import ShortCity from '../../models/shortCity';
import { all, put, takeLatest, call } from 'redux-saga/effects';
import { CITIES_GET } from '../actionTypes/citySelection';
import delayedPromise from '../../helpers/delayedPromise';

// openweather API doesn't have methods to show cities by query
// so I have to hardcode some values
export const hardcodedCities: ShortCity[] = [
  { id: 'Kyiv', name: 'Kyiv', temperature: 280, weatherState: WeatherState.CLOUDY },
  { id: 'Kharkiv', name: 'Kharkiv', temperature: 281, weatherState: WeatherState.THUNDERSTORM },
  { id: 'Odessa', name: 'Odessa', temperature: 281, weatherState: WeatherState.FOG },
];


// also no pagination and infinite scroll included
function* getCities(action: GetCitiesAction) {
  const cityName: string = action.payload.toUpperCase();
  const cities = hardcodedCities.filter(c => c?.name?.toUpperCase().includes(cityName));
  // just for demo
  yield call(delayedPromise, null, null, 500);
  //
  yield put(getCitiesSuccess(cities));
}

export default function* () {
  yield all([
    takeLatest(CITIES_GET, getCities),
  ]);
}
