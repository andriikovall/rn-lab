import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import wrapPage from '../hocs/wrapPage';
import Login from '../pages/login';

const Stack = createStackNavigator();

export default function NotLoggedInNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={wrapPage(Login)} options={{
        header: () => null,
      }} />
    </Stack.Navigator>
  );
}
