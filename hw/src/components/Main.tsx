import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import React, { RefObject } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../constants/colors';
import AppState from '../models/store/appState';
import AuthState from '../models/store/states/authState';
import SharedState from '../models/store/states/sharedState';
import Routes from './routes';
import Loader from './shared/Loader';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';
import NotificationsHandler from './hocs/notificationsHandler';
import navigationService from '../services/navigationService';

export default function Main() {
  const { fetchingUser } = useSelector<AppState, AuthState>((state) => state.auth);
  const sharedState = useSelector<AppState, SharedState>(state => state.shared);
  const isAppLoading = sharedState?.loading || fetchingUser;

  useReduxDevToolsExtension(navigationService.navigationRef as RefObject<NavigationContainerRef>);

  return (
    <NavigationContainer
      ref={navigationService.navigationRef}
    >
      <NotificationsHandler>
        <SafeAreaView>
          <View style={wrapper}>
            <Loader overrideContextLoadingValue={isAppLoading} />
            <Routes />
          </View>
        </SafeAreaView>
      </NotificationsHandler>
    </NavigationContainer>
  );
}

const { wrapper } = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.colorBg,
    height: '100%',
  },
});
