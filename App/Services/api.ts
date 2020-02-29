import apisauce, { ApisauceInstance } from 'apisauce';

export const instanceApi = (
    baseURL: string = 'https://myBackendUrl.com.br',
): ApisauceInstance => {
    const api: ApisauceInstance = apisauce.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
        },
        timeout: 15000,
    });

    return api;
};

const api = instanceApi();

const setAuthorizationToken = (access_token: string) => {
    api.setHeader('Authorization', 'Bearer ' + access_token);
};

export default {
    api,
    setAuthorizationToken,
};
