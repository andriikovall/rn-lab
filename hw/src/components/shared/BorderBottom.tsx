import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import colors from '../../constants/colors';

interface BorderBottomProps {
  children: any;
  style?: StyleProp<ViewStyle>;
}

export default function BorderBottom({ children, style }: BorderBottomProps) {
  return (
    <View style={[styles.bottomDivider, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomDivider: {
    borderBottomColor: colors.colorSecondary,
    borderBottomWidth: 2,
    // flex: 1,
  },
});
