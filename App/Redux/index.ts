import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { authenticationReducer } from './authentication/reducers';

const rootReducer = combineReducers({
    authentication: authenticationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: rootReducer });
