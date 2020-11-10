//@todo ask
// Maybe rename to CityDTO?

import WeatherSummary from '../enums/weatherSummary';

export default interface ShortCity {
  id: string;
  name: string;
  weatherState: WeatherSummary;
}
