import { ApiResponse } from 'apisauce';
import { call, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { criptosCall } from './apiCall';
import { User } from '../../Models/User';
import { CriptosActions } from '../../Redux/criptos/actionCreators';
import { AuthenticationActions } from '../../Redux/authentication/actionCreators';

export function* criptosRequest(instance: criptosCall, action: AnyAction) {
    try {
        const response: ApiResponse<any> = yield call(instance.criptosRequest);
        // console.log(response.data.data);
        if (response.ok) {
            const criptosArray = response.data.data;
            console.log(criptosArray);
            yield put(CriptosActions.criptosSuccess(criptosArray));
        } else {
            const error = response.data.mensagem;
            yield put(CriptosActions.criptosFailure(error));
        }
    } catch (error) {
        yield put(CriptosActions.criptosFailure(error.message));
    }
}
