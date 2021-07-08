import { all, takeLatest } from 'redux-saga/effects';

import { AuthenticationActionTypes } from '../Redux/authentication/actionTypes';
import { loginRequest, tokenRequest } from './authentication/sagas';
import { authenticationCall } from './authentication/apiCall';
import { SignUpActionTypes } from '../Redux/signUp/actionTypes';
import { CriptosActionTypes } from '../Redux/criptos/actionTypes';
import { criptosRequest } from './criptos/sagas';
import { criptosCall } from './criptos/apiCall';
import { signUpRequest } from './signUp/sagas';
import { signUpCall } from './signUp/apiCall';

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
        takeLatest(
            CriptosActionTypes.CRIPTOS_REQUEST,
            criptosRequest,
            criptosCall,
        ),
        takeLatest(SignUpActionTypes.SIGNUP_REQUEST, signUpRequest, signUpCall),
    ]);
}
