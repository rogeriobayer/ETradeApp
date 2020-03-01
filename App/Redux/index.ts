import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSagas from '../Sagas/index';
import { authenticationReducer } from './authentication/reducers';

const rootReducer = combineReducers({
    authentication: authenticationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSagas);
