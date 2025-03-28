import { useQuery } from '@tanstack/react-query';
import { getPendingLessons } from '../services/lessons-api';
import { PendingLessonsTypes } from '../types/lessons-types';

export const usePendingLessons = () => {
  return useQuery<PendingLessonsTypes>({
    queryKey: ['pending-lessons'],
    queryFn: getPendingLessons,
  });
};
