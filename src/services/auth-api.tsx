/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from '../api/axios-instance';
import {
  RegisterTypes,
  LoginTypes,
  LoginResponseTypes,
  ConfirmResetPasswordTypes,
  UserDetailsTypes,
} from '../types/auth-types';

export const register = async (data: RegisterTypes) => {
  try {
    const response = await axiosInstance.post(`/auth/register/`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error: any) {
    throw (
      error.response?.data || 'An error occurred during registering process.'
    );
  }
};

export const login = async (data: LoginTypes): Promise<LoginResponseTypes> => {
  try {
    const response = await axiosInstance.post<LoginResponseTypes>(
      `/auth/login/`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw error?.response?.data || 'An error occurred during login process.';
  }
};

export const resetPassword = async (data: { email: string }) => {
  try {
    const response = await axiosInstance.post(
      `/auth/password-reset/request/`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw (
      error.response?.data || 'An error occurred during password reset process.'
    );
  }
};

export const confirmResetPassword = async (
  uid: string,
  token: string,
  data: ConfirmResetPasswordTypes
) => {
  try {
    const response = await axiosInstance.post(
      `/auth/password-reset/confirm/${uid}/${token}/`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw (
      error.response?.data ||
      'An error occurred while confirming password reset.'
    );
  }
};

export const fetchUserProfile = async (): Promise<UserDetailsTypes> => {
  const response = await axiosInstance.get<UserDetailsTypes>('/users/profile/');
  return response.data;
};

export const updateUserProfile = async (data: {
  profile_picture: string;
  first_name: string;
  last_name: string;
  email: string;
}) => {
  const response = await axiosInstance.patch('/users/profile/', data);
  return response.data;
};
