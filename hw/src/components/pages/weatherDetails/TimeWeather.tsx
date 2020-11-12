import React from 'react';
import textToTemperature from '../../../helpers/textToTemperature';
import { getTimeFromMinutes } from '../../../helpers/time';
import ShortWeather from '../../../models/shortWeather';
import VerticalIconItem from '../../shared/VerticalIconItem';
import WeatherIcon from '../../shared/WeatherIcon';

interface TimeWeatherProps {
  time: number;
  weather: ShortWeather;
}

export default function TimeWeather(props: TimeWeatherProps) {
  const time = getTimeFromMinutes(props.time);
  const icon = <WeatherIcon state={props.weather.state} size={30} />;
  return (
    <VerticalIconItem
      upperText={time && `${time.h}:${time.m.toString().padEnd(2, '0')}`}
      lowerText={textToTemperature(props.weather.temperature.toString())}
      icon={icon}/>
  );
}
