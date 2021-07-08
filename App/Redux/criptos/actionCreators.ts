import { createAction } from '@reduxjs/toolkit';

import { Criptos } from '../../Models/Criptos';
import { CriptosActionTypes } from './actionTypes';
import { User } from '../../Models/User';

export const CriptosActions = {
    criptosRequest: createAction(CriptosActionTypes.CRIPTOS_REQUEST),
    criptosSuccess: createAction<Criptos>(CriptosActionTypes.CRIPTOS_SUCCESS),
    criptosFailure: createAction<string>(CriptosActionTypes.CRIPTOS_FAILURE),

    cleanState: createAction(CriptosActionTypes.CLEAN_STATE),
};

export type CriptosActions = typeof CriptosActions;
