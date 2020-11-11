import WeatherSummary from '../enums/weatherSummary';

const stateToStringMap = new Map<WeatherSummary, string>([
  [WeatherSummary.CLOUDY, 'Cloudy'],
  [WeatherSummary.FOG, 'Fog'],
  [WeatherSummary.MOSTLY_CLOUDY, 'Mostly cloudy'],
  [WeatherSummary.MOSTLY_SUNNY, 'Mostly sunny'],
  [WeatherSummary.RAIN, 'Rain'],
  [WeatherSummary.SUNNY, 'Sunny'],
  [WeatherSummary.THUNDERSTORM, 'Ah sheet...'],
  [WeatherSummary.TORNADO, 'We all gonna die'],
  [WeatherSummary.UNSET, ''],
]);

const getReadableStateName = (state: WeatherSummary): string => {
  return stateToStringMap.get(state) ?? '';
};

export default getReadableStateName;
