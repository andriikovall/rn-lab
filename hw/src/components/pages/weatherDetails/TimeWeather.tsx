import React from 'react';
import useNumberToTemperatureTextConverter from '../../../hooks/useNumberToTemperatureTextConverter';
import ShortWeather from '../../../models/shortWeather';
import VerticalIconItem from '../../shared/VerticalIconItem';
import WeatherIcon from '../../shared/WeatherIcon';
import moment from 'moment';

interface TimeWeatherProps {
  time: number;
  weather: ShortWeather;
}

export default function TimeWeather({ time, weather }: TimeWeatherProps) {
  const icon = <WeatherIcon state={weather.state} size={30} />;
  const upperText = moment(time).format('dd HH:mm');
  const lowerText = useNumberToTemperatureTextConverter(weather.temperature);
  return (
    <VerticalIconItem
      upperText={upperText}
      lowerText={lowerText}
      icon={icon} />
  );
}
