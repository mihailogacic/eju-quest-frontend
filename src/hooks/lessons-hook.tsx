/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery, useMutation } from '@tanstack/react-query';
import {
  getPendingLessons,
  generateNewLesson,
  submitNewLesson,
} from '../services/lessons-api';
import { PendingLessonsTypes } from '../types/lessons-types';
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
    onError: (error: any) => {
      const message =
        error?.response?.data?.detail ||
        error?.detail ||
        'Something went wrong while submitting the lesson.';
      toast.error(message);
    },
  });
};
