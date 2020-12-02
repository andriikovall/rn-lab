import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';
import { persistReducer, persistStore } from 'redux-persist';
import AppState from '../models/store/appState';
import logger from 'redux-logger';
import Redux from 'redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [
    'weatherDetails',
    'daySelection',
    'shared',
    'citySelection',
  ] as (keyof AppState)[],
};

const middleWare: Redux.Middleware[] = [];

if (__DEV__) {
  middleWare.push(logger);
}


declare const window: {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
};


export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const persistedRootReducer = persistReducer(persistConfig, rootReducer);
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    persistedRootReducer,
    composeEnhancers(applyMiddleware(...middleWare, sagaMiddleware)),
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);
  return { store, persistor };
}
