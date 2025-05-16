import axios from "axios";
import { Method } from "./models/common"; // adjust path as needed

const isServer = () => typeof window === "undefined";
const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_PREFIX}`;

export interface IHttpRequestBody {
  url: string;
  method: Method;
  data?: any;
  params?: { [key: string]: any };
  headers?: { [key: string]: any };
  responseType?: any;
}

// Create axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  withCredentials: true, // auto-send cookies in the client side
});

// Axios request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    if (isServer()) {
      // Server-side logic: Attach cookies manually
      const { headers } = require("next/headers"); // Only import inside server-side block
      const incomingHeaders = await headers();
      const cookie = incomingHeaders.get("cookie");
      if (cookie) {
        config.headers = {
          ...(config.headers || {}),
          Cookie: cookie,
        } as any;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Axios response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (response?.status === 401) {
      console.warn("Unauthorized access");
    }
    return Promise.reject(error.response?.data?.status || error);
  }
);

// Main request function
export const makeHttpRequest = async (requestBody: IHttpRequestBody) => {
  const { method, url, data, params, headers, responseType } = requestBody;

  const finalHeaders = {
    ...headers,
  };

  return axiosInstance.request({
    method,
    url,
    data,
    params,
    headers: finalHeaders,
    responseType,
  });
};



