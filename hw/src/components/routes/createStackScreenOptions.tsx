import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AppText } from '../shared/Text';
import HeaderBackground from './HeaderBackground';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';
import colors from '../../constants/colors';
import sizes from '../../constants/sizes';
import { StackNavigationOptions } from '@react-navigation/stack';

type NavigationType = NavigationProp<Record<string, object | undefined>, string, Readonly<{
  key: string;
  index: number;
  routeNames: string[];
  history?: unknown[] | undefined;
  routes: any;
  type: string;
  stale: false;
}>, {}, {}>

interface CreateStackScreenOptions {
  title?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  navigation: NavigationType;
  onLeftPress?: (ev: Event) => void;
  onRightPress?: (ev: Event) => void;
}


const headerBackground = () => <HeaderBackground />;

const DefaultLeftIcon = () =>
  <Icon name="chevron-back-outline" color={colors.colorPrimary} size={sizes.headerIconSize} />;


const createStackScreenOptions =
  ({
    title,
    leftIcon,
    rightIcon,
    navigation,
    onRightPress,
    onLeftPress,
  }: CreateStackScreenOptions): StackNavigationOptions => {
    if (!onRightPress) {
      onRightPress = () => { };
    }
    if (!onLeftPress) {
      onLeftPress = () => {
        navigation.goBack();
      };
    }
    const headerLeft = () =>
      (
        <TouchableOpacity onPress={onLeftPress}>
          {leftIcon || <DefaultLeftIcon />}
        </TouchableOpacity>
      );

    const headerRight = () =>
      (
        <TouchableOpacity onPress={onRightPress}>
          {rightIcon}
        </TouchableOpacity>
      );

    return {
      headerBackground: headerBackground,
      headerLeft: headerLeft,
      headerRight: headerRight,
      headerTitle: () => (title ? <AppText>{title}</AppText> : null),
    };
  };


export default createStackScreenOptions;
