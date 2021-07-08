import { ApiResponse } from 'apisauce';

import { api } from '../../Services/api';
import { Cripto } from '../../Models/Cripto';
import { Criptos } from '../../Models/Criptos';

export const criptosCall = {
    criptosRequest: (): Promise<ApiResponse<Criptos>> => {
        return api.get<Criptos>('/?start=0&limit=100');
    },
};

export type criptosCall = typeof criptosCall;
