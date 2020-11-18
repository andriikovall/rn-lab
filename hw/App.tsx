import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import colors from './src/constants/colors';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import Loader from './src/components/shared/Loader';
import LoadingContext from './src/contexts/loading';
import usePromise from './src/hooks/usePromise';
import AuthService from './src/services/authService';

const App = () => {
  const [isAppLoading, setIsAppLoading] = useState<boolean>(false);
  const user = usePromise(AuthService.getUser());
  useEffect(() => {
    setIsAppLoading(!user);
  }, [user]);
  return (
    <LoadingContext.Provider value={{
      setIsLoading: (val) => setIsAppLoading(val),
      isLoading: isAppLoading,
    }}>
      <NavigationContainer>
        <SafeAreaView>
          <View style={styles.wrapper}>
            <Loader />
            <Routes isLoggedIn={!!user} />
          </View>
        </SafeAreaView>
      </NavigationContainer>
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
