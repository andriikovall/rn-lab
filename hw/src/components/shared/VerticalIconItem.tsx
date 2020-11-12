import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppText } from './Text';

interface VerticalIconItemInterface {
  upperText?: string | any;
  icon: any;
  lowerText: string | any;
}

export default function VerticalIconItem({ upperText, icon, lowerText }: VerticalIconItemInterface) {
  return (
    <View style={styles.container}>
      <View style={styles.upperTextContainer}>
        <AppText size={15}>
          {upperText}
        </AppText>
      </View>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <View style={styles.lowerTextContainer}>
        <AppText size={30}>
          {lowerText}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 27,
    paddingVertical: 25,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperTextContainer: {
    paddingBottom: 5,
    alignItems: 'center',
  },
  lowerTextContainer: {
    paddingTop: 10,
    alignItems: 'center',
  },
});
