/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import {
  getPendingLessons,
  generateNewLesson,
  submitNewLesson,
  getLessonDetail,
  getApprovedLessons,
  approveLesson,
  unapproveLesson,
  getLessonQuiz,
  submitLessonSummary,
  submitQuizAnswers,
  getGeneratedContent,
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
    onSuccess: () => {},
    onError: (error: any) => {
      const message =
        error?.response?.data?.detail ||
        error?.detail ||
        'Something went wrong while submitting the lesson.';
      toast.error(message);
    },
  });
};

export const useGetGeneratedContent = (
  taskId: string | null,
  enabledOverride = true
) => {
  return useQuery({
    queryKey: ['generated-content', taskId],
    queryFn: () => {
      if (!taskId) throw new Error('Task ID is required');
      return getGeneratedContent(taskId);
    },
    enabled: !!taskId && enabledOverride,
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
  });
};

export const useSubmitLesson = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: submitNewLesson,
    onSuccess: () => {
      toast.success('Lesson successfully added!');
      navigate('/pending-content');
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

export const useApproveLesson = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: approveLesson,
    onSuccess: () => {
      toast.success('Lesson approved successfully!');
      navigate('/pending-content');
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.detail ||
        error?.detail ||
        'Something went wrong while approving the lesson.';
      toast.error(message);
    },
  });
};

export const useUnapproveLesson = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: unapproveLesson,
    onSuccess: () => {
      toast.success('Lesson unapproved successfully!');
      navigate('/pending-content');
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.detail ||
        error?.detail ||
        'Something went wrong while unapproving the lesson.';
      toast.error(message);
    },
  });
};

export const useLessonQuiz = (id: string | number) => {
  return useQuery({
    queryKey: ['lesson-quiz', id],
    queryFn: () => getLessonQuiz(id),
    enabled: !!id,
  });
};

export const useSubmitLessonSummary = () => {
  return useMutation({
    mutationFn: submitLessonSummary,
    onSuccess: () => {
      toast.success('Lesson summary submitted!');
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.detail ||
        error?.detail ||
        'Failed to submit lesson summary.';
      toast.error(message);
    },
  });
};

export const useSubmitQuiz = () => {
  return useMutation({
    mutationFn: submitQuizAnswers,
    onSuccess: () => {},
    onError: (error: any) => {
      toast.error(
        error?.detail || 'An error occurred while submitting the quiz.'
      );
    },
  });
};
