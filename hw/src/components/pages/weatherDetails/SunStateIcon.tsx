import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../../helpers/colors';

interface SunStateIconProps {
  currentTime: number;
  sunRise: number;
  sunSet: number;
  size?: number;
  style?: any;
}

export default function SunStateIcon({ currentTime, sunSet, sunRise, size, style }: SunStateIconProps) {
  const isNight = currentTime < sunRise || currentTime > sunSet;
  const iconName = isNight ? 'moon-outline' : 'sunny-outline';
  return (
    <Icon name={iconName} color={colors.colorPrimary} size={size} style={style}/>
  );
}
