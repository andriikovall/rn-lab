import moment from 'moment';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../../constants/colors';
import { AppText } from '../../shared/Text';
import Icon from 'react-native-vector-icons/Ionicons';


export default function Reload() {
  return (
    <View style={styles.reload}>
      <AppText size={18}>{moment(Date.now()).format('HH:mm')}</AppText>
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
