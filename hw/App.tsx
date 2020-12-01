import React from 'react';

import Main from './src/components/Main';
import SharedErrorBoundary from './src/components/shared/SharedErrorBoundary';

import { Provider } from 'react-redux';

import configureStore from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from './src/components/shared/Loader';

const { persistor, store } = configureStore();
const loader = <Loader />;

const App = () => {
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
