import { NavigationContainer } from '@react-navigation/native';
import React, { useRef } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../constants/colors';
import AppState from '../models/store/appState';
import AuthState from '../models/store/states/authState';
import SharedState from '../models/store/states/sharedState';
import Routes from './routes';
import Loader from './shared/Loader';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';

export default function Main() {
  const { fetchingUser } = useSelector<AppState, AuthState>((state) => state.auth);
  const sharedState = useSelector<AppState, SharedState>(state => state.shared);
  const isAppLoading = sharedState?.loading || fetchingUser;
  const navigationRef = useRef<any>();
  useReduxDevToolsExtension(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView>
        <View style={wrapper}>
          <Loader overrideContextLoadingValue={isAppLoading}/>
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
