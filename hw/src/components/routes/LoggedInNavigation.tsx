import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import wrapPage from '../hocs/wrapPage';
import DaySelection from '../pages/daySelection';
import colors from '../../constants/colors';
import CityDetailsStackScreen from './CityDetailsStack';
import styles from './styles';
import routesNames from './routesNames';

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
      <Tab.Screen name={routesNames.HOME} component={CityDetailsStackScreen}
        options={{
          title: weatherTitle,
        }} />
      <Tab.Screen name={routesNames.DAY_SELECTION} component={wrapPage(DaySelection)} options={{
        title: forecastTitle,
      }} />
    </Tab.Navigator>

  );
};
