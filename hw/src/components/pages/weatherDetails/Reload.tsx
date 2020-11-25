import moment from 'moment';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../../constants/colors';
import { AppText } from '../../shared/Text';
import Icon from 'react-native-vector-icons/Ionicons';

interface ReloadProps {
  lastReloadTime: number | string | Date;
}

export default function Reload({ lastReloadTime }: ReloadProps) {
  const displayTime = moment(lastReloadTime).format('HH:mm');
  return (
    <View style={styles.reload}>
      <AppText size={18}>{displayTime}</AppText>
      <Icon style={styles.reloadIcon} name="reload-outline" color={colors.colorPrimary} size={16} />
    </View>
  );
}

const styles = StyleSheet.create({
  reload: {
    flexDirection: 'row',
  },
  reloadIcon: {
    paddingHorizontal: 5,
    alignSelf: 'center',
  },
});
