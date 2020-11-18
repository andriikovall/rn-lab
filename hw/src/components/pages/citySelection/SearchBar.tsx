import React, { useRef } from 'react';
import { StyleSheet, TextInput, TextInputProps, TouchableOpacity, View, InteractionManager } from 'react-native';
import { useDebounce } from '../../../hooks/useDebounce';
import { baseTextStyle } from '../../shared/Text';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../../constants/colors';
import BorderBottom from '../../shared/BorderBottom';

interface SearchBarProps {
  disabled?: boolean;
  debounce?: number;
  onChange: (val: string) => void;
  nativeInputProps?: TextInputProps;
  value?: string;
}

export default function SearchBar({ debounce, onChange, nativeInputProps, value, disabled }: SearchBarProps) {
  const debounceFunc = useDebounce(debounce || 200);
  const inputRef = useRef<TextInput>(null);

  const onInputChange = (val: string) => {
    debounceFunc(() => {
      onChange(val);
    });
  };

  const onSearchPress = () => {
    InteractionManager.runAfterInteractions(() => {
      inputRef?.current?.focus();
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.aside} />
      <BorderBottom style={styles.inputWrapper}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholderTextColor={colors.colorSecondary}
          {...nativeInputProps} value={value} onChangeText={onInputChange}
          editable={!disabled}
        />
      </BorderBottom>
      <View style={[styles.aside, styles.iconContainer]}>
        <TouchableOpacity onPress={onSearchPress}>
          <Icon name="search-outline" size={35} color={baseTextStyle.color} />
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  inputWrapper: {
    flex: 7,
  },
  input: {
    ...baseTextStyle,
    fontWeight: 'normal',
    fontSize: 20,
  },
  container: {
    flexDirection: 'row',
  },
  aside: {
    flex: 1,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    paddingBottom: 0,
  },
});
