/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@tanstack/react-query';
import { register } from '../services/auth-api';
import { RegisterTypes } from '../types/auth-types';
import { toast } from 'react-toastify';

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: RegisterTypes) => register(data),
    onSuccess: () => {
      toast.success('Successfuly registrated. Verify your email.');
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
