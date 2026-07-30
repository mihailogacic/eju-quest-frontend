import axios, { AxiosError, AxiosHeaders } from 'axios';
import { refreshSession } from './auth-session';
import useAuthStore from '../store/auth-store';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

type RetryableRequest = NonNullable<AxiosError['config']> & {
  _retry?: boolean;
};

const doesNotUseRefresh = (url?: string) =>
  ['/auth/login/', '/auth/token/refresh/', '/auth/logout/'].some((path) =>
    url?.includes(path)
  );

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as RetryableRequest | undefined;

    if (
      error.response?.status !== 401 ||
      !originalRequest ||
      originalRequest._retry ||
      doesNotUseRefresh(originalRequest.url)
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      const token = await refreshSession();
      useAuthStore.getState().setToken(token);
      originalRequest.headers = AxiosHeaders.from(originalRequest.headers);
      originalRequest.headers.set('Authorization', `Bearer ${token}`);
      return axiosInstance(originalRequest);
    } catch {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
