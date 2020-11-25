import WeatherState from '../../enums/weatherState';
import ShortDayWeather from '../../models/shortDayWeather';
import { DayWeather } from './../../models/dayWeather';


export interface IWeatherAPIResultMapper {
  mapResponseToDayWeather(response: Object, dayOffset: number): DayWeather;
  mapResponseStateToWeatherStateEnum(state: string | number): WeatherState;
  mapResponseToShortDaysWeather(response: Object): ShortDayWeather[];
}
