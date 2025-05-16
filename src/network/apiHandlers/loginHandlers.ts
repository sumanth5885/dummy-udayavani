import { AxiosResponse } from "axios";
import { loginEndPoints } from "../models/login/endpoints";
import { LoginServices } from "../models/login/loginServices"
import { IHttpRequestBody, makeHttpRequest } from "../apiClient";

export const LoginHandler = (): LoginServices => {
    const loginServices: LoginServices = {
        //login handler
        login: async function (credentials: any): Promise<AxiosResponse<any>> {
            try {
                const { url, method } = loginEndPoints.LOGIN;
                const requestBody: IHttpRequestBody = {
                    url: url,
                    method: method,
                    data: credentials,
                };
                const request = makeHttpRequest(requestBody);
                console.log(request);
                return await request
                    .then((response: AxiosResponse<any>) => {
                        return response;
                    })
                    .catch((error: Error) => {
                        return Promise.reject(error);
                    });
            } catch (error) {
                return Promise.reject(error);
            }
        },

        // list_guestHouse handler
        list_guestHouse: async function (): Promise<AxiosResponse<any>> {
            try {
                const { url, method } = loginEndPoints.LIST_GUESTHOUSE;
                const requestBody: IHttpRequestBody = {
                    url: url,
                    method: method,
                };
                const request = makeHttpRequest(requestBody);
                return await request
                    .then((response: AxiosResponse<any>) => {
                        return response;
                    })
                    .catch((error: Error) => {
                        return Promise.reject(error);
                    });
            } catch (error) {
                return Promise.reject(error);
            }
        },

        // list assigned guest house handler
        list_assigned_guesthouse: async function (): Promise<
            AxiosResponse<any>
        > {
            try {
                const { url, method } = loginEndPoints.ASSIGNED_GUESTHOUSE_LIST;
                const requestBody: IHttpRequestBody = {
                    url: url,
                    method: method,
                };
                const request = makeHttpRequest(requestBody);
                return await request
                    .then((response: AxiosResponse<any>) => {
                        return response;
                    })
                    .catch((error: Error) => {
                        return Promise.reject(error);
                    });
            } catch (error) {
                return Promise.reject(error);
            }
        },
    };

    return loginServices;
};
