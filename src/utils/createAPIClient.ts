import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface ErrorDataModel {
  code: number;
  description: string;
  message: string;
  name: string;
}

export interface ErrorModel<T = ErrorDataModel> {
  data: T | undefined;
  message: string;
  status: number | undefined;
}

function axiosResponseToData<T>(res: AxiosResponse<T>): T {
  return res.data;
}

function axiosErrorToData<T>({
  response,
  message,
}: AxiosError<T>): ErrorModel<T> {
  return {
    data: response?.data,
    message,
    status: response?.status,
  };
}

function axiosErrorRedirects({ response }: AxiosError) {
  // if response status code is 302 redirect
  if (typeof response !== 'undefined' && response.status === 302) {
    const { location } = response.headers as Record<string, string>;

    if (typeof location === 'string') {
      window.location.replace(location);
    }
  }
}

type AxiosHeaders = Record<string, string | undefined> | undefined;

function injectGlobalCookies(config: AxiosRequestConfig) {
  const globalHeaders = axios.defaults.headers as AxiosHeaders;
  const globalCookies = globalHeaders?.cookie;

  if (globalCookies) {
    Object.assign(config, {
      headers: {
        ...((config.headers as AxiosHeaders) ?? {}),
        cookie: globalCookies,
      },
    });
  }
}

export const createAPIClient = (
  baseURL: string,
  headers?: Record<string, string>,
  withCredentials = false,
  config?: AxiosRequestConfig,
) => {
  const request = axios.create({
    baseURL,
    headers: {
      common: headers,
    },
    withCredentials,
    ...config,
  });

  request.interceptors.request.use((_config) => {
    injectGlobalCookies(_config);
    return _config;
  });

  return {
    async get<Response, Params = Record<string, unknown>, Error = void>(
      url: string,
      params?: Params,
    ) {
      try {
        const res = await request.get<Response>(url, { params });
        return axiosResponseToData(res);
      } catch (error) {
        axiosErrorRedirects(error);

        return Promise.reject(axiosErrorToData<Error>(error));
      }
    },
    async post<Response, Data = Record<string, unknown>, Error = void>(
      url: string,
      data?: Data,
    ) {
      try {
        const res = await request.post<Response>(url, data);
        return axiosResponseToData(res);
      } catch (error) {
        return Promise.reject(axiosErrorToData<Error>(error));
      }
    },
    async put<Response, Data = Record<string, unknown>, Error = void>(
      url: string,
      data?: Data,
    ) {
      try {
        const res = await request.put<Response>(url, data);
        return axiosResponseToData(res);
      } catch (error) {
        return Promise.reject(axiosErrorToData<Error>(error));
      }
    },
  };
};
