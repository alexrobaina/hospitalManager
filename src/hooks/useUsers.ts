import { useQuery } from 'react-query';
import axios from 'axios';

const getUsers = async () => {
  const { data } = await axios.get(
    'https://63bedcf7f5cfc0949b634fc8.mockapi.io/users'
  );
  return data;
};

export const useUsers = () => {
  return useQuery('users', getUsers);
};
