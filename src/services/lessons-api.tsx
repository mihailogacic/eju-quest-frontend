/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from '../api/axios-instance';
import {
  PendingLessonsTypes,
  GenerateLessonInput,
  GenerateLessonResponse,
  SubmitLessonPayload,
  LessonDetail,
} from '../types/lessons-types';

export const getPendingLessons = async (): Promise<LessonDetail[]> => {
  try {
    const response = await axiosInstance.get<LessonDetail[]>('/lessons/list/', {
      params: { status: 'pending' },
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
  data: SubmitLessonPayload & { image?: File | null }
): Promise<any> => {
  try {
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('age_level', data.age_level.toString());
    formData.append('lesson_length', data.lesson_length);

    if (data.image) {
      formData.append('image', data.image);
    }

    formData.append('content', JSON.stringify(data.content));
    formData.append('questions', JSON.stringify(data.questions));

    const response = await axiosInstance.post(
      '/lessons/add-questions/',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

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
