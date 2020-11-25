import { weatherApi } from './../helpers/api';
import { DayWeather } from './../models/dayWeather';
import { IWeatherAPIResultMapper } from './../helpers/mappers/IWeatherAPIResultMapper';
import { kelvinToFahrenheit } from './../helpers/temperatureConverters';
import TemperatureUnit from '../enums/temperatureUnits';
import { kelvinToCelsius } from '../helpers/temperatureConverters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import openweatherResultMapper from '../helpers/mappers/openweatherMapper';
import OpenweatherResponse from '../models/openweather/openweatherResponse';
import { AxiosResponse } from 'axios';
import ShortDayWeather from '../models/shortDayWeather';

class WeatherService {

  private responseMapper: IWeatherAPIResultMapper;


  constructor() {
    this.responseMapper = openweatherResultMapper;
  }


  public async getDayWeather(city: string, dayOffset: number = 0): Promise<DayWeather> {
    return weatherApi.get('/', { params: { q: city } })
      .then((res: AxiosResponse<OpenweatherResponse>) =>
        this.responseMapper.mapResponseToDayWeather(res.data, dayOffset));
  }

  public async getShortDaysWeather(city: string): Promise<ShortDayWeather[]> {
    return weatherApi.get('/', { params: { q: city } })
      .then((res: AxiosResponse<OpenweatherResponse>) =>
        this.responseMapper.mapResponseToShortDaysWeather(res.data));

  }
}

export default new WeatherService();
