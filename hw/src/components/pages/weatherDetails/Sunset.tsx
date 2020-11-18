import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../../constants/colors';
import { minutesToTimeText } from '../../../helpers/time';
import VerticalIconItem from '../../shared/VerticalIconItem';

interface SunsetProps {
  value: number;
}

export default function Sunset({ value }: SunsetProps) {
  const icon = <Icon name="sunset" color={colors.colorPrimary} size={30}/>;
  const time = minutesToTimeText(value);
  return (
    <VerticalIconItem icon={icon} lowerText={time} />
  );
}
