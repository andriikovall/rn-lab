import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../../constants/colors';
import { AppText } from '../../shared/Text';
import VerticalIconItem from '../../shared/VerticalIconItem';
import Icon from 'react-native-vector-icons/Feather';

interface WindProps {
  speed: number;
  direction: number;
}

export default function Wind({ speed, direction }: WindProps) {
  const speedText = speed?.toPrecision(2);
  const lowerText =
    (<AppText>
      {speedText}
      <View style={styles.speedUnits}>
        <AppText size={15}>m/s</AppText>
      </View>
    </AppText>);

  const icon = (
    <Icon
      name="arrow-up"
      size={32}
      color={colors.colorPrimary}
      style={{
        transform: [{ rotate: `${direction - 180}deg` }],
      }} />
  );

  return (
    <VerticalIconItem lowerText={lowerText} icon={icon} />
  );
}

const styles = StyleSheet.create({
  speedUnits: {
    transform: [{ translateX: 2 }, { translateY: -3 }],
  },
});
