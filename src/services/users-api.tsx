/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from '../api/axios-instance';
import { AddChildTypes } from '../types/users-types';

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
