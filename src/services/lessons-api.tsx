/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from '../api/axios-instance';
import {
  PendingLessonsTypes,
  GenerateLessonInput,
  GenerateLessonResponse,
  SubmitLessonPayload,
  LessonDetail,
  QuestionResponseTypes,
  SubmitQuizPayload,
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

export const getGeneratedContent = async (
  taskId: string | null
): Promise<GenerateLessonResponse> => {
  try {
    const response = await axiosInstance.get<GenerateLessonResponse>(
      `/lessons/tasks/${taskId}/status/`,
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
      'An error occurred while fetching pending lessons.'
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

export const approveLesson = async (lesson_id: number) => {
  try {
    const response = await axiosInstance.post(
      '/lessons/approve/',
      { lesson_id },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw (
      error.response?.data || 'An error occurred while approving the lesson.'
    );
  }
};

export const unapproveLesson = async (lesson_id: number) => {
  try {
    const response = await axiosInstance.post(
      '/lessons/unapprove/',
      { lesson_id },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw (
      error.response?.data || 'An error occurred while unapproving the lesson.'
    );
  }
};

export const deleteLesson = async (lesson_id: number): Promise<void> => {
  try {
    await axiosInstance.delete(`/lessons/${lesson_id}/delete/`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    throw (
      error?.response?.data || 'An error occurred while deleting the lesson.'
    );
  }
};

export const getLessonQuiz = async (
  id: string | number
): Promise<QuestionResponseTypes> => {
  const response = await axiosInstance.get<QuestionResponseTypes>(
    `/lessons/quiz/${id}/`
  );
  return response.data;
};

export const submitLessonSummary = async (data: {
  lesson_id: number;
  description: string;
}) => {
  const response = await axiosInstance.post('/lessons/summary/', data);
  return response.data;
};

export const submitQuizAnswers = async (data: SubmitQuizPayload) => {
  try {
    const response = await axiosInstance.post('/lessons/submit-quiz/', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error: any) {
    throw (
      error.response?.data || 'An error occurred while submitting the quiz.'
    );
  }
};
