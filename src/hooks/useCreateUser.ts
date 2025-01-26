import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { createUser } from '../services/api/user';

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation(createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
      toast.success('Patient created successfully');
    },
    onError: () => {
      toast.error('Failed to create patient');
    },
  });
};
