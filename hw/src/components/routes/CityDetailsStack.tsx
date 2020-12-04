import { useNavigation } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
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
import routesNames from './routesNames';

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
    navigation.navigate(routesNames.SETTINGS);
  };

  const onCityRightPress = () => {
    navigation.navigate(routesNames.CITY_SELECTION);
  };

  return (
    <Stack.Navigator screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
      <Stack.Screen name={routesNames.WEATHER_DETAILS} component={wrapPage(WeatherDetails)}
        options={createStackScreenOptions({
          navigation,
          leftIcon: leftCityIcon,
          rightIcon: rightCityIcon,
          onLeftPress: onCityLeftPress,
          onRightPress: onCityRightPress,
        })} />
      <Stack.Screen name={routesNames.SETTINGS} component={wrapPage(Settings)}
        options={createStackScreenOptions({
          onLeftPress: () => navigation.navigate(routesNames.WEATHER_DETAILS),
          navigation,
        })} />
      <Stack.Screen name={routesNames.CITY_SELECTION} component={wrapPage(CitySelection)}
        options={createStackScreenOptions({
          onLeftPress: () => navigation.navigate(routesNames.WEATHER_DETAILS),
          navigation,
        })} />
    </Stack.Navigator>
  );
}

