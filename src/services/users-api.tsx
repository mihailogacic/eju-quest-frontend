/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from '../api/axios-instance';
import { AddChildTypes, ChildTypes } from '../types/users-types';

export const addChild = async (data: AddChildTypes) => {
  try {
    const response = await axiosInstance.post('/users/add_child/', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error: any) {
    throw (
      error.response?.data || 'An error occurred while adding a child user.'
    );
  }
};

export const getDashboardUsers = async (search: string) => {
  try {
    const response = await axiosInstance.get('/users/dashboard/', {
      params: { search },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error: any) {
    throw (
      error.response?.data ||
      'An error occurred while fetching dashboard users.'
    );
  }
};

export const getUsers = async (): Promise<ChildTypes> => {
  try {
    const response = await axiosInstance.get<ChildTypes>('/users/dashboard/', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || 'An error occurred while fetching user data.';
  }
};
