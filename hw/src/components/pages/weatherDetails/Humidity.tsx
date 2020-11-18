import React from 'react';
import VerticalIconItem from '../../shared/VerticalIconItem';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../../constants/colors';

interface HumidityProps {
  value: number;
}

export default function Humidity({ value }: HumidityProps) {
  const icon = <Icon name="droplet" color={colors.colorPrimary} size={30} />;
  return (
    <VerticalIconItem icon={icon} lowerText={`${value}%`} />
  );
}
