/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import {
  getPendingLessons,
  generateNewLesson,
  submitNewLesson,
  getLessonDetail,
  getApprovedLessons,
} from '../services/lessons-api';
import { PendingLessonsTypes, LessonDetail } from '../types/lessons-types';
import { toast } from 'react-toastify';

export const usePendingLessons = () => {
  return useQuery<LessonDetail[]>({
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
  const navigate = useNavigate();

  return useMutation({
    mutationFn: submitNewLesson,
    onSuccess: () => {
      toast.success('Lesson successfully added!');
      navigate('/reviews');
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

export const useApprovedLessons = () => {
  return useQuery<PendingLessonsTypes>({
    queryKey: ['approved-lessons'],
    queryFn: getApprovedLessons,
  });
};
