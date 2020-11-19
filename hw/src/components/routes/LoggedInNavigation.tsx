import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import wrapPage from '../hocs/wrapPage';
import DaySelection from '../pages/daySelection';
import colors from '../../constants/colors';
import CityDetailsStackScreen from './CityDetailsStack';
import styles from './styles';

const Tab = createBottomTabNavigator();

export default function LoggedInNavigation() {
  const weatherTitle = 'Weather'.toUpperCase();
  const forecastTitle = 'Forecast'.toUpperCase();
  return (

    <Tab.Navigator tabBarOptions={{
      activeTintColor: colors.colorOrange,
      inactiveTintColor: colors.colorPrimary,
      activeBackgroundColor: colors.colorLoaderBg,
      inactiveBackgroundColor: colors.colorLoaderBg,
      labelStyle: styles.tabLabel,
      labelPosition: 'beside-icon',
      style: styles.tabBar,
    }}>
      <Tab.Screen name="Home" component={CityDetailsStackScreen}
        options={{
          title: weatherTitle,
        }} />
      <Tab.Screen name="DaySelection" component={wrapPage(DaySelection)} options={{
        title: forecastTitle,
      }} />
    </Tab.Navigator>

  );
};
