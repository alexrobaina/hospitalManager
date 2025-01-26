import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const deleteUser = async (id: string) => {
  const { data } = await axios.delete(
    `https://63bedcf7f5cfc0949b634fc8.mockapi.io/users/${id}`
  );
  return data;
};

export const useDeleteUser = (invalidateQueries: string = 'users') => {
  const queryClient = useQueryClient();

  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(invalidateQueries);
    },
  });
};
