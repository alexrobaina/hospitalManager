import { useMutation, useQueryClient } from 'react-query';
import { deleteUser } from '../services/api/user';

export const useDeleteUser = (invalidateQueries: string = 'users') => {
  const queryClient = useQueryClient();

  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(invalidateQueries);
    },
  });
};
