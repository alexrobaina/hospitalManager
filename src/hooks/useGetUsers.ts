import { useQuery } from 'react-query';
import axios from 'axios';

export interface User {
  id: string;
  name: string;
  avatar: string;
  description: string;
  website: string;
}

const fetchUsers = async (
  query: string,
  page: number,
  limit: number | null
): Promise<User[]> => {
  const url = 'https://63bedcf7f5cfc0949b634fc8.mockapi.io/users';
  const { data } = await axios.get(url, {
    params: {
      name: query || undefined,
      page,
      limit,
    },
  });
  return data;
};

export const useGetUsers = (
  query: string,
  page: number,
  limit: number | null
) => {
  return useQuery(['users', query, page, limit], () =>
    fetchUsers(query, page, limit)
  );
};
