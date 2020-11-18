import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../constants/colors';

export default function HeaderBackground() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.colorBg,
    flex: 1,
  },
});
