import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';
import { persistReducer, persistStore } from 'redux-persist';
import AppState from '../models/store/appState';

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

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    persistedRootReducer,
    applyMiddleware(sagaMiddleware)
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);
  return { store, persistor };
}
