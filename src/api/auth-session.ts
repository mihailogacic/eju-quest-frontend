import axios from 'axios';
import useAuthStore from '../store/auth-store';
import { LoginResponseTypes } from '../types/auth-types';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

let refreshPromise: Promise<string> | null = null;

export const refreshSession = (): Promise<string> => {
  if (!refreshPromise) {
    refreshPromise = axios
      .post<LoginResponseTypes>(
        `${BASE_URL}/auth/token/refresh/`,
        {},
        { withCredentials: true }
      )
      .then(({ data }) => {
        useAuthStore.getState().setSession(data.user, data.access_token);
        return data.access_token;
      })
      .catch((error) => {
        useAuthStore.getState().clearAuth();
        throw error;
      })
      .finally(() => {
        refreshPromise = null;
      });
  }

  return refreshPromise;
};
