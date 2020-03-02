import {
    combineReducers,
    Reducer,
    applyMiddleware,
    createStore,
    compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootSagas from '../Sagas/index';
import { authenticationReducer } from './authentication/reducers';

const persistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    whitelist: ['authentication'],
    stateReconciler: autoMergeLevel2,
};

const rootReducer: Reducer = combineReducers({
    authentication: authenticationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [];
const enhancers: any = [];

middlewares.push(sagaMiddleware);
enhancers.push(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, compose(...enhancers));

export const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);
