import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import colors from './src/constants/colors';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/components/routes';
import Loader from './src/components/shared/Loader';
import LoadingContext from './src/contexts/loading';
import usePromise from './src/hooks/usePromise';
import AuthService from './src/services/authService';
import AuthContext from './src/contexts/auth';
import User from './src/models/user';

import SettingsProvider from './src/components/contextProvides/SettingsProvider';

const App = () => {
  const [isAppLoading, setIsAppLoading] = useState<boolean>(false);
  const [user, setUser] = usePromise<User | null>(AuthService.getUser());
  useEffect(() => {
    setIsAppLoading(user === undefined);
  }, [user]);
  return (
    <LoadingContext.Provider value={{
      setIsLoading: (val) => setIsAppLoading(val),
      isLoading: isAppLoading,
    }}>
      <AuthContext.Provider value={{
        setUser: setUser,
        getUser: () => user,
      }}>
        <SettingsProvider>
          <NavigationContainer>
            <SafeAreaView>
              <View style={styles.wrapper}>
                <Loader />
                <Routes isLoggedIn={!!user} />
              </View>
            </SafeAreaView>
          </NavigationContainer>
        </SettingsProvider>
      </AuthContext.Provider>
    </LoadingContext.Provider>
  );
};


const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.colorBg,
    height: '100%',
  },
});

export default App;
