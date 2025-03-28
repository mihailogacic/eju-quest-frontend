/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { addChild, getDashboardUsers, getUsers } from '../services/users-api';
import { AddChildTypes } from '../types/users-types';

export const useAddChild = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: AddChildTypes) => addChild(data),
    onSuccess: () => {
      toast.success('Child user successfully added.');
      queryClient.invalidateQueries({ queryKey: ['users'] });
      navigate('/admin');
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.detail ||
        error?.detail ||
        'Failed to add child user.';
      toast.error(message);
    },
  });
};

export const useDashboardUsers = (search: string) => {
  return useQuery({
    queryKey: ['dashboard-users', search],
    queryFn: () => getDashboardUsers(search),
    enabled: !!search,
  });
};

export const useGetUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
};
