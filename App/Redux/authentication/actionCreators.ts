import { createAction } from '@reduxjs/toolkit';

import { AuthenticationActionTypes } from './actionTypes';
import { User } from '../../Models/User';
import { Login } from '../../Models/Login';

export const AuthenticationActions = {
    loginRequest: createAction<Login>(AuthenticationActionTypes.LOGIN_REQUEST),
    loginSuccess: createAction<User>(AuthenticationActionTypes.LOGIN_SUCCESS),
    loginFailure: createAction<string>(AuthenticationActionTypes.LOGIN_FAILURE),

    logoutRequest: createAction(AuthenticationActionTypes.LOGOUT_REQUEST),
};

export type AuthenticationActions = typeof AuthenticationActions;
