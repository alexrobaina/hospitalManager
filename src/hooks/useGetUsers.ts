import { useQuery } from 'react-query';
import { getUsers } from '../services/api/user';

export interface User {
  id: string;
  name: string;
  avatar: string;
  description: string;
  website: string;
}

export const useGetUsers = (
  query: string,
  page: number,
  limit: number | null
) => {
  return useQuery(['users', query, page, limit], () =>
    getUsers({ query, page, limit })
  );
};
