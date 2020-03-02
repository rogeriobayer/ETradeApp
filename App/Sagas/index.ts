import { all, takeLatest } from 'redux-saga/effects';

import { AuthenticationActionTypes } from '../Redux/authentication/actionTypes';
import { loginRequest, tokenRequest } from './authentication/sagas';
import { authenticationCall } from './authentication/apiCall';

export default function* rootSagas() {
    yield all([
        takeLatest(
            AuthenticationActionTypes.LOGIN_REQUEST,
            loginRequest,
            authenticationCall,
        ),
        takeLatest(
            AuthenticationActionTypes.TOKEN_REQUEST,
            tokenRequest,
            authenticationCall,
        ),
    ]);
}
