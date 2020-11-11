import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import colors from '../../helpers/colors';

interface CustomTextProps extends TextProps {
  children: any;
  size?: number;
}

export const Title = (props : CustomTextProps) => (
  <Text style={[styles.baseText, styles.title, props.size ? { fontSize: props.size } : undefined]}
    { ...props }>
    {props.children}
  </Text>
);

export const Subtitle = (props: CustomTextProps) => (
  <Text style={[styles.baseText, styles.subtitle, props.size ? { fontSize: props.size } : undefined]}
    { ...props }>
    {props.children}
  </Text>
);

export const AppText = (props: CustomTextProps) => (
  <Text style={[styles.baseText, styles.text, props.size ? { fontSize: props.size } : undefined]}
    { ...props }>
    {props.children}
  </Text>
);

export const AppTextSecondary = (props: CustomTextProps) => (
  <AppText { ...props } style={styles.textSecondary} />
);

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'PTS55F',
    color: colors.colorPrimary,
  },
  title: {
    fontSize: 45,
    letterSpacing: 4,
  },
  subtitle: {
    fontSize: 25,
    letterSpacing: 3,
  },
  text: {
    fontSize: 22,
  },
  textSecondary: {
    color: colors.colorSecondary,
  },
});

export const baseTextStyle = styles.baseText;
