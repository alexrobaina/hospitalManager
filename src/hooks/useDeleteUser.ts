import { useMutation, useQueryClient } from 'react-query';
import { deleteUser } from '../services/api/user';
import { toast } from 'react-toastify';

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('user');
      toast.success('User deleted successfully');
    },
    onError: () => {
      toast.error('Error deleting user');
    },
  });
};
