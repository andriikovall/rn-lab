import WeatherSummary from '../enums/weatherSummary';

export default interface ShortWeather {
    state: WeatherSummary;
    temperature: number;
}