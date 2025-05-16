import { AxiosResponse } from "axios";

import { IHttpRequestBody, makeHttpRequest } from "../apiClient";
import { PostsServices } from "../models/posts/postsServices";
import { postsEndpoints } from "../models/posts/endpoints";
// import { convertDateFormatFilter } from "../../helpers/common";

export const PostsHandler = (): PostsServices => {
    const PostsServices: PostsServices = {
        posts_add: async function (
            credentials: any
        ): Promise<AxiosResponse<any>> {
            try {
                const { url, method } = postsEndpoints.POSTS_ADD;
                const requestBody: IHttpRequestBody = {
                    url: url,
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
        posts_dropdown: async function (): Promise<AxiosResponse<any>> {
            try {
                const { url, method } = postsEndpoints.POSTS_DROPDOWN;
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
        contentposts_list: async function (
            credentials: any,
            page: number,
            limit: number,
            search: string,
            status: number,
            filters: any
        ): Promise<AxiosResponse<any>> {
            try {
                const { url, method } = postsEndpoints.CONTENTSPOST_LIST;

                console.log("filtetrs", filters);
                const filterParams = new URLSearchParams();


                // Ensure filters exist and process them
                Object.entries(filters || {}).forEach(([key, value]) => {
                    if (value && value !== "All") {
                        if (key === "startDate" || key === "endDate") {
                            const stringValue = String(value);
                            // filterParams.append(key, convertDateFormatFilter(stringValue)); // Format date
                        } else {
                            filterParams.append(key, String(value));
                        }
                    }
                });

                const queries = `?postType=${filters?.postType}`;
                const requestUrl = `${url}?page=${page}&limit=${limit}&search=${search}&status=${status}&${filterParams.toString()}`;

                const requestBody: IHttpRequestBody = {
                    url: requestUrl,
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

        //getby id for content list
        content_getby_id: async function (
            id: string,
            search?: string
        ): Promise<AxiosResponse<any>> {
            try {
                const { url, method } = postsEndpoints.CONTENT_GETBY_ID;
                const queries = `?search=${search}`
                const requestBody: IHttpRequestBody = {
                    url: `${url}/${id}${queries}`,
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

        //delete content by id
        content_delete: async function (
            id: string
        ): Promise<AxiosResponse<any>> {
            try {
                const { url, method } = postsEndpoints.CONTENT_DELETE;
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

        //update content
        content_update: async function (
            id: string,
            data: any
        ): Promise<AxiosResponse<any>> {
            try {
                const { url, method } = postsEndpoints.CONTENT_UPDATE;
                const requestBody: IHttpRequestBody = {
                    url: `${url}/${id}`,
                    method: method,
                    data: data,
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

        //update status
        status_update: async function (
            id: string,
            status: number
        ): Promise<AxiosResponse<any>> {
            try {
                const { url, method } = postsEndpoints.CONTENT_UPDATE;
                const requestBody: IHttpRequestBody = {
                    url: `${url}/${id}`,
                    method: method,
                    data: { status: status },
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

        //update image
        update_image: async function (
            id: string,
            imageData: any
        ): Promise<AxiosResponse<any>> {
            try {
                const { url, method } = postsEndpoints.UPDATE_IMAGE;
                const requestBody: IHttpRequestBody = {
                    url: `${url}/${id}`,
                    method: method,
                    data: imageData,
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
        ingredients_list: async function (
            credentials: any,
           
        ): Promise<AxiosResponse<any>> {
            try {
                const { url, method } = postsEndpoints.CONTENTSPOST_LIST;

                const requestBody: IHttpRequestBody = {
                    url: url,
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

        // category_update: async function (
        //     id: string,
        //     credentials: any

        // ): Promise<AxiosResponse<any>> {

        //     try {
        //         const { url, method } = categoryEndpoints.CATEGORY_UPDATE;
        //         const requestBody: IHttpRequestBody = {
        //             url: `${url}/${id}`,
        //             method: method,
        //             data: credentials,
        //         };
        //         const request = makeHttpRequest(requestBody);
        //         return await request
        //             .then((response: AxiosResponse<any>) => {
        //                 return response;
        //             })
        //             .catch((error: Error) => {
        //                 return Promise.reject(error);
        //             });
        //     } catch (error) {
        //         return Promise.reject(error);
        //     }
        // },
        // category_delete: async function (

        //     id: string
        // ): Promise<AxiosResponse<any>> {

        //     try {
        //         const { url, method } = categoryEndpoints.CATEGORY_DELETE;

        //         const requestBody: IHttpRequestBody = {
        //             url: `${url}/${id}`,
        //             method: method,

        //         };
        //         const request = makeHttpRequest(requestBody);
        //         return await request
        //             .then((response: AxiosResponse<any>) => {
        //                 return response;
        //             })
        //             .catch((error: Error) => {
        //                 return Promise.reject(error);
        //             });
        //     } catch (error) {
        //         return Promise.reject(error);
        //     }
        // },
        // category_list_byId: async function (

        //     id: string
        // ): Promise<AxiosResponse<any>> {

        //     try {
        //         const { url, method } = categoryEndpoints.CATEGORY_LIST_BY_ID;

        //         const requestBody: IHttpRequestBody = {
        //             url: `${url}/${id}`,
        //             method: method,

        //         };
        //         const request = makeHttpRequest(requestBody);
        //         return await request
        //             .then((response: AxiosResponse<any>) => {
        //                 return response;
        //             })
        //             .catch((error: Error) => {
        //                 return Promise.reject(error);
        //             });
        //     } catch (error) {
        //         return Promise.reject(error);
        //     }
        // },
    };
    return PostsServices;
};
