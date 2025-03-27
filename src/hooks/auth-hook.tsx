/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import {
  register,
  login,
  resetPassword,
  confirmResetPassword,
} from '../services/auth-api';
import useAuthStore from '../store/auth-store';
import {
  RegisterTypes,
  LoginTypes,
  LoginResponseTypes,
} from '../types/auth-types';
import { toast } from 'react-toastify';

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: RegisterTypes) => register(data),
    onSuccess: () => {
      navigate('/sign-in', { state: { registered: true } });
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.detail ||
        error?.detail ||
        'Registration failed.';
      toast.error(message);
    },
  });
};

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginTypes) => login(data),
    onSuccess: (data: LoginResponseTypes) => {
      const { access_token, refresh_token, user } = data;

      const { setUser, setToken, setRefreshToken } = useAuthStore.getState();

      setUser(user);
      setToken(access_token);
      setRefreshToken(refresh_token);

      navigate('/admin');
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.detail || error?.detail || 'Login failed.';
      toast.error(message);
    },
  });
};

export const useResetPassword = () => {
  return useMutation({
    mutationFn: (data: { email: string }) => resetPassword(data),
    onSuccess: () => {
      toast.success(
        'Password reset request was successfully sent to your email.'
      );
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.detail ||
        error?.detail ||
        'Reset password request failed.';
      toast.error(message);
    },
  });
};

export const useConfirmResetPassword = (uid: string, token: string) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: {
      new_password: string;
      confirm_new_password: string;
    }) => confirmResetPassword(uid, token, data),
    onSuccess: () => {
      navigate('/reset-password/success');
    },
    onError: (error: any) => {
      const data = error?.response?.data || error;
      const message =
        typeof data === 'object'
          ? Object.values(data).flat().join('\n')
          : 'Password reset failed.';
      toast.error(message);
    },
  });
};
