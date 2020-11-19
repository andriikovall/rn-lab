import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import wrapPage from '../hocs/wrapPage';
import WeatherDetails from '../pages/weatherDetails';
import createStackScreenOptions from './createStackScreenOptions';
import Icon from 'react-native-vector-icons/Ionicons';
import sizes from '../../constants/sizes';
import colors from '../../constants/colors';
import CitySelection from '../pages/citySelection';
import styles from './styles';
import Settings from '../pages/settings';

const Stack = createStackNavigator();

export default function CityDetailsStackScreen() {
  const navigation = useNavigation();

  const leftCityIcon =
    <Icon name="settings-outline" size={sizes.headerIconSize} color={colors.colorPrimary}
      style={styles.headerIcon} />;
  const rightCityIcon =
    <Icon name="location-outline" size={sizes.headerIconSize} color={colors.colorPrimary}
      style={styles.headerIcon} />;

  const onCityLeftPress = () => {
    navigation.navigate('Settings');
  };

  const onCityRightPress = () => {
    navigation.navigate('Cities');
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="WeatherDetails" component={wrapPage(WeatherDetails)}
        options={createStackScreenOptions({
          navigation,
          leftIcon: leftCityIcon,
          rightIcon: rightCityIcon,
          onLeftPress: onCityLeftPress,
          onRightPress: onCityRightPress,
        })} />
      <Stack.Screen name="Settings" component={wrapPage(Settings)}
        options={createStackScreenOptions({
          onLeftPress: () => navigation.navigate('WeatherDetails'),
          navigation,
        })} />
      <Stack.Screen name="Cities" component={wrapPage(CitySelection)}
        options={createStackScreenOptions({
          onLeftPress: () => navigation.navigate('WeatherDetails'),
          navigation,
        })} />
    </Stack.Navigator>
  );
}

