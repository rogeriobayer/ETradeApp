import { createReducer, Reducer, AnyAction } from '@reduxjs/toolkit';

import { AuthenticationState } from './state';
import { AuthenticationActionTypes } from './actionTypes';
import { RequestStatus } from '../../Models/RequestStatus';

const initialState: AuthenticationState = {
    user: null,
    message: null,
    status: RequestStatus.NOOP,
};

const loginRequest: Reducer = (
    state: AuthenticationState,
    action: AnyAction,
) => {
    return { ...state, status: RequestStatus.WIP };
};

const loginSuccess: Reducer = (
    state: AuthenticationState,
    action: AnyAction,
) => {
    return { ...state, user: action.payload, status: RequestStatus.SUCCESS };
};

const loginFailure: Reducer = (
    state: AuthenticationState,
    action: AnyAction,
) => {
    return { ...state, message: action.payload, status: RequestStatus.FAILURE };
};

const logoutRequest: Reducer = () => {
    return { initialState };
};

export const authenticationReducer: Reducer = createReducer(initialState, {
    [AuthenticationActionTypes.LOGIN_REQUEST]: loginRequest,
    [AuthenticationActionTypes.LOGIN_SUCCESS]: loginSuccess,
    [AuthenticationActionTypes.LOGIN_FAILURE]: loginFailure,
    [AuthenticationActionTypes.LOGOUT_REQUEST]: logoutRequest,
});
