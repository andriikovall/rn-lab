import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import colors from '../../../constants/colors';

interface LoginButtonProps {
  title: string;
  onPress: (ev: GestureResponderEvent) => void;
}

export default function LoginButton({ onPress, title }: LoginButtonProps) {
  const uppercasedTitle = title.toUpperCase();
  return (
    <TouchableHighlight onPress={onPress} testID="LoginButton.TouchableHighlight">
      <View style={styles.button}>
        <Text style={styles.text} testID="LoginButton.Text">{uppercasedTitle}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.colorOrange,
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: colors.colorPrimary,
    paddingVertical: 2,
    fontSize: 30,
  },
});
