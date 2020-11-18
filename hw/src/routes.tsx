import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/pages/login';
import wrapPage from './components/hocs/wrapPage';
import WeatherDetails from './components/pages/weatherDetails';
import CitySelection from './components/pages/citySelection';

interface RoutesProps {
  isLoggedIn: boolean;
}

const Stack = createStackNavigator();

export default function Routes({ isLoggedIn }: RoutesProps) {
  return (
    isLoggedIn ? <LoggedInNavigation /> : <NotLoggedInNavigation />
  );
}

function NotLoggedInNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={wrapPage(Login)} options={{
        header: () => null,
      }} />
    </Stack.Navigator>
  );
}

function LoggedInNavigation() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="WeatherDetails" component={wrapPage(WeatherDetails)} options={{
          header: () => null,
        }} />
        <Stack.Screen name="CitySelection" component={wrapPage(CitySelection)} options={{
          header: () => null,
        }} />
      </Stack.Navigator>
    </>
  );
}
