import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import colors from '../../../constants/colors';
import BorderBottom from '../../shared/BorderBottom';
import { baseTextStyle } from '../../shared/Text';
// import

export default function UserDataForm() {
  return (
    <BorderBottom style={styles.container}>
      <BorderBottom style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor={colors.colorPrimaryShade}
        />
      </BorderBottom>
      <BorderBottom style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Age"
          placeholderTextColor={colors.colorPrimaryShade}
        />
      </BorderBottom>
    </BorderBottom>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    // paddingVertical: 40,
    paddingTop: 20,
    paddingBottom: 55,
  },
  inputWrapper: {
    paddingHorizontal: 20,
    marginTop: 5,
  },
  input: {
    ...baseTextStyle,
    fontWeight: 'normal',
    fontSize: 20,
  },
});
