import moment from 'moment';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../../constants/colors';
import VerticalIconItem from '../../shared/VerticalIconItem';


interface SunriseProps {
  time: number;
}

export default function Sunrise({ time }: SunriseProps) {
  const icon = <Icon name="sunrise" color={colors.colorPrimary} size={30}/>;
  const displayTime = moment(time).format('HH:mm');
  return (
    <VerticalIconItem icon={icon} lowerText={displayTime} />
  );
}
