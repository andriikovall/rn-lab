import OpenweatherCity from './city';
import OpenweatherWeather from './weather';

export default interface OpenweatherResponse {
  message: string | number;
  cnt: number;
  list: OpenweatherWeather[];
  city: OpenweatherCity;
};
