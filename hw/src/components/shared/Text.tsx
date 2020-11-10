import React from 'react';
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import colors from '../../helpers/colors';

interface CustomTextProps extends TextProps {
  children: any;
  size?: number;
  style?: StyleProp<TextStyle>,
}

export const Title = (props: CustomTextProps) => (
  <Text style={[
    styles.baseText,
    styles.title,
    props.size ? { fontSize: props.size } : undefined,
    props?.style]}>
    {props.children}
  </Text>
);

export const Subtitle = (props: CustomTextProps) => (
  <Text style={[
    styles.baseText,
    styles.subtitle,
    props.size ? { fontSize: props.size } : undefined,
    props?.style]}>
    {props.children}
  </Text>
);

export const AppText = (props: CustomTextProps) => (
  <Text style={[
    styles.baseText,
    styles.text,
    props.size ? { fontSize: props.size } : undefined,
    props?.style]}>
    {props.children}
  </Text>
);

export const AppTextSecondary = (props: CustomTextProps) => (
  <AppText {...props} style={styles.textSecondary} />
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
