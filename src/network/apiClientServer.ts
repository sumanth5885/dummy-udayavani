// src/network/apiClientServer.ts
import axios from "axios";
import { cookies } from "next/headers";
import { Method } from "./models/common";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_PREFIX}`;

export interface IHttpRequestBody {
  url: string;
  method: Method;
  data?: any;
  responseType?: any;
  params?: { [key: string]: any };
  headers?: { [key: string]: any };
}

export const makeServerHttpRequest = async (requestBody: IHttpRequestBody) => {
  const { method, url, data, params, headers, responseType } = requestBody;

  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value;

  const finalHeaders = {
    ...headers,
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  return axios({
    method,
    url: `${BASE_URL}${url}`,
    data,
    params,
    headers: finalHeaders,
    responseType,
    timeout: 60000,
  });
};
