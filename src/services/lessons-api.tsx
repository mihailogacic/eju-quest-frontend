/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from '../api/axios-instance';
import {
  PendingLessonsTypes,
  GenerateLessonInput,
  GenerateLessonResponse,
  SubmitLessonPayload,
  LessonDetail,
} from '../types/lessons-types';

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

export const generateNewLesson = async (
  data: GenerateLessonInput
): Promise<GenerateLessonResponse> => {
  try {
    const response = await axiosInstance.post<GenerateLessonResponse>(
      '/lessons/generate-new-lesson/',
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
      error.response?.data || 'An error occurred while generating the lesson.'
    );
  }
};

export const submitNewLesson = async (
  data: SubmitLessonPayload
): Promise<any> => {
  try {
    const response = await axiosInstance.post('/lessons/add-questions/', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error: any) {
    throw (
      error.response?.data || 'An error occurred while submitting the lesson.'
    );
  }
};

export const getLessonDetail = async (
  id: string | number
): Promise<LessonDetail> => {
  const response = await axiosInstance.get<LessonDetail>(`/lessons/${id}/`);
  return response.data;
};

export const getApprovedLessons = async (): Promise<PendingLessonsTypes> => {
  try {
    const response = await axiosInstance.get<PendingLessonsTypes>(
      '/lessons/explore-approved/',
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
      'An error occurred while fetching approved lessons.'
    );
  }
};
