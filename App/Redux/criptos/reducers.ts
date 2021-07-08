import { createReducer, Reducer, AnyAction } from '@reduxjs/toolkit';

import { CriptosState } from './state';
import { RequestStatus } from '../../Models/RequestStatus';
import { CriptosActionTypes } from './actionTypes';

const initialState: CriptosState = {
    criptos: null,
    message: null,
    status: RequestStatus.NOOP,
};

const criptosRequest: Reducer = (state: CriptosState): CriptosState => {
    return { ...state, status: RequestStatus.WIP };
};

const criptosSuccess: Reducer = (
    state: CriptosState,
    actions: AnyAction,
): CriptosState => {
    console.log('CRIPTOSSUCESS', actions.payload);
    return {
        ...state,
        criptos: actions.payload,
        status: RequestStatus.SUCCESS,
    };
};

const criptosFailure: Reducer = (
    state: CriptosState,
    actions: AnyAction,
): CriptosState => {
    return {
        ...state,
        message: actions.payload,
        status: RequestStatus.FAILURE,
    };
};

const cleanState: Reducer = (state: CriptosState): CriptosState => {
    return { ...state, status: RequestStatus.NOOP };
};

export const criptosReducer: Reducer = createReducer(initialState, {
    [CriptosActionTypes.CRIPTOS_REQUEST]: criptosRequest,
    [CriptosActionTypes.CRIPTOS_SUCCESS]: criptosSuccess,
    [CriptosActionTypes.CRIPTOS_FAILURE]: criptosFailure,
    [CriptosActionTypes.CLEAN_STATE]: cleanState,
});
