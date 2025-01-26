import { useQuery, useQueryClient } from 'react-query';
import { getUserById } from '../services/api/user';

export const useUserById = (userId: string) => {
  const queryClient = useQueryClient();

  return useQuery(['user', userId], () => getUserById(userId), {
    enabled: !!userId, // Avoids infinite loop when userId is undefined
    onSuccess: () => {
      queryClient.invalidateQueries('users', { refetchActive: false });
    },
  });
};
