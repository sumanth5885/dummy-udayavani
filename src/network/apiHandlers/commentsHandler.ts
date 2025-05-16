import { AxiosResponse } from "axios";

import { IHttpRequestBody, makeHttpRequest } from "../apiClient";
import { CommentsServices } from "../models/comments/commentsServices";
import { commentsEndpoints } from "../models/comments/endpoints";



export const CommentsHandler = (): CommentsServices => {
    const CommentsServices: CommentsServices = {

        comments_list: async function (
            credentials: any
        ): Promise<AxiosResponse<any>> {

            try {
                const { url, method } = commentsEndpoints.COMMENTS_LIST;
                const requestBody: IHttpRequestBody = {
                    url: `${url}`,
                    method: method,
                    data: credentials,
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

        comments_delete: async function (


            id: string
        ): Promise<AxiosResponse<any>> {

            try {
                const { url, method } = commentsEndpoints.COMMENTS_DELETE;

                const requestBody: IHttpRequestBody = {
                    url: `${url}/${id}`,
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
    

        reply_comment: async function (
            payload:any
        ): Promise<AxiosResponse<any>> {

            try {
                const { url, method } = commentsEndpoints.REPLY_COMMENTS;
                const requestBody: IHttpRequestBody = {
                    url: `${url}`,
                    method: method,
                    data: payload,
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
        }
    }
    return CommentsServices;
};
