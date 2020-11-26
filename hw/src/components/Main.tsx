import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import useAuth from '../hooks/useAuth';
import Routes from './routes';
import Loader from './shared/Loader';

export default function Main() {
  const user = useAuth().getUser();
  const isLoadingUser = user === undefined;
  return (
    <NavigationContainer>
      <SafeAreaView>
        <View style={wrapper}>
          <Loader overrideContextLoadingValue={isLoadingUser}/>
          <Routes />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const { wrapper } = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.colorBg,
    height: '100%',
  },
});
