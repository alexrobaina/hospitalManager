import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

interface User {
  id: string;
  name: string;
  avatar: string;
  website: string;
  description: string;
}

const editUser = async (user: User) => {
  const { data } = await axios.put(
    `https://63bedcf7f5cfc0949b634fc8.mockapi.io/users/${user.id}`,
    user
  );
  return data;
};

export const useEditUser = (invalidateQueries: string = '') => {
  const queryClient = useQueryClient();

  return useMutation(editUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(invalidateQueries);
    },
  });
};
