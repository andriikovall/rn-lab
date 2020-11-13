import React from 'react';
import textToTemperature from '../../../helpers/textToTemperature';
import { minutesToTimeText } from '../../../helpers/time';
import ShortWeather from '../../../models/shortWeather';
import VerticalIconItem from '../../shared/VerticalIconItem';
import WeatherIcon from '../../shared/WeatherIcon';

interface TimeWeatherProps {
  time: number;
  weather: ShortWeather;
}

export default function TimeWeather(props: TimeWeatherProps) {
  const icon = <WeatherIcon state={props.weather.state} size={30} />;
  return (
    <VerticalIconItem
      upperText={minutesToTimeText(props.time)}
      lowerText={textToTemperature(props.weather.temperature.toString())}
      icon={icon} />
  );
}
