import { useQuery } from 'react-query';
import { getUserById } from '../services/api/user';

export const useUserById = (userId: string) => {
  return useQuery(['user', userId], () => getUserById(userId), {
    enabled: !!userId, // Avoids infinite loop when userId is undefined
  });
};
