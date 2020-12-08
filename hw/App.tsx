import React, { useEffect } from 'react';

import Main from './src/components/Main';
import SharedErrorBoundary from './src/components/shared/SharedErrorBoundary';

import { Provider } from 'react-redux';

import configureStore from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from './src/components/shared/Loader';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import { isRouteName } from './src/components/routes/routesNames';
import navigationService from './src/services/navigationService';

const { persistor, store } = configureStore();
const loader = <Loader />;

// reacts on all background messages
messaging().setBackgroundMessageHandler(async (_message: FirebaseMessagingTypes.RemoteMessage) => {
  // can handle somehow to
});

// works only if the app was not "killed"
messaging().onNotificationOpenedApp(message => {
  const pageToNavigate: string | undefined = message.data?.page;
  if (pageToNavigate && isRouteName(pageToNavigate)) {
    navigationService.navigate(pageToNavigate);
  }
});


const App = () => {
  useEffect(() => {
    // moved here to possibly use some hooks or other API for displaying alert
    messaging().requestPermission().then(permission => {
      if (permission === messaging.AuthorizationStatus.DENIED) {
        Alert.alert('Please allow application to receive notification');
      }
    });
  }, []);

  return (
    <SharedErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={loader} persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    </SharedErrorBoundary>
  );
};


export default App;
