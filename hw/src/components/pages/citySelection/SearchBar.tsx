import React, { useRef } from 'react';
import { StyleSheet, TextInput, TextInputProps, TouchableOpacity, View, InteractionManager } from 'react-native';
import { useDebounce } from '../../../hooks/useDebounce';
import { baseTextStyle } from '../../shared/Text';
import Icon from 'react-native-vector-icons/Ionicons';
import sharedStyles from '../../../helpers/styles';
import colors from '../../../helpers/colors';

interface SearchBarProps {
  disabled?: boolean;
  debounce?: number;
  onChange: (val: string) => void;
  nativeInputProps?: TextInputProps;
  value?: string;
}

export default function SearchBar (props: SearchBarProps) {
  const debounce = useDebounce(props.debounce || 200);
  const inputRef = useRef<TextInput>(null);

  const onInputChange = (val: string) => {
    debounce(() => {
      props.onChange(val);
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
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholderTextColor={colors.colorSecondary}
        {...props.nativeInputProps} value={props.value} onChangeText={onInputChange}
        editable={!props.disabled}
      />
      <View style={[styles.aside, styles.iconContainer]}>
        <TouchableOpacity onPress={onSearchPress}>
          <Icon name="search-outline" size={35} color={baseTextStyle.color}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  input: {
    ...baseTextStyle,
    ...sharedStyles.bottomDivider,
    fontWeight: 'normal',
    fontSize: 20,
    flex: 7,
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
