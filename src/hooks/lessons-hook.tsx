/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery, useMutation } from '@tanstack/react-query';
import {
  getPendingLessons,
  generateNewLesson,
  submitNewLesson,
  getLessonDetail,
} from '../services/lessons-api';
import { PendingLessonsTypes, LessonDetail } from '../types/lessons-types';
import { toast } from 'react-toastify';

export const usePendingLessons = () => {
  return useQuery<PendingLessonsTypes>({
    queryKey: ['pending-lessons'],
    queryFn: getPendingLessons,
  });
};

export const useGenerateLesson = () => {
  return useMutation({
    mutationFn: generateNewLesson,
    onSuccess: () => {
      toast.success('Lesson was generated successfully!');
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.detail ||
        error?.detail ||
        'Something went wrong while submitting the lesson.';
      toast.error(message);
    },
  });
};

export const useSubmitLesson = () => {
  return useMutation({
    mutationFn: submitNewLesson,
    onSuccess: () => {
      toast.success('Lesson successfully added!');
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.detail ||
        error?.detail ||
        'Something went wrong while submitting the lesson.';
      toast.error(message);
    },
  });
};

export const useLessonDetail = (id: string | number) => {
  return useQuery<LessonDetail>({
    queryKey: ['lesson-detail', id],
    queryFn: () => getLessonDetail(id),
    enabled: !!id,
  });
};
