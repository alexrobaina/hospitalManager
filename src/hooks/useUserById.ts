import { useQuery } from 'react-query';
import axios from 'axios';

const getUserById = async (userId: string) => {
  const { data } = await axios.get(
    `https://63bedcf7f5cfc0949b634fc8.mockapi.io/users/${userId}`
  );
  return data;
};

export const useUserById = (userId: string) => {
  return useQuery(['user', userId], () => getUserById(userId), {
    enabled: !!userId, // Only run the query if userId is truthy
  });
};
