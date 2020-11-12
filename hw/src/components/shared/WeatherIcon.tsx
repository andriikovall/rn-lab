import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import WeatherState, { getIconName } from '../../enums/weatherState';
import colors from '../../helpers/colors';

interface WeatherIconProps {
  state: WeatherState;
  size?: number;
  style?: any;
}

export default function WeatherIcon({ state, size, style }: WeatherIconProps) {
  const iconName = getIconName(state);
  return <Icon size={size} name={iconName} style={style} color={colors.colorPrimary}/>;
}
