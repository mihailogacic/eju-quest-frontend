/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from '../api/axios-instance';
import { PendingLessonsTypes } from '../types/lessons-types';

export const getPendingLessons = async (): Promise<PendingLessonsTypes> => {
  try {
    const response = await axiosInstance.get<PendingLessonsTypes>(
      '/lessons/list/',
      {
        params: { status: 'pending' },
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw (
      error.response?.data ||
      'An error occurred while fetching pending lessons.'
    );
  }
};
