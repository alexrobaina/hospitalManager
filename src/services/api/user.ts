import axios from 'axios';
import { User } from '../../types/user';

const baseURL = 'https://63bedcf7f5cfc0949b634fc8.mockapi.io';

export const getUsers = async ({
  query,
  page,
  limit,
}: {
  query?: string;
  page?: number;
  limit?: number | null;
}) => {
  try {
    const { data } = await axios.get(`${baseURL}/users`, {
      params: {
        name: query || undefined,
        page,
        limit,
      },
    });

    const total = await axios.get(`${baseURL}/users`);
    return { users: data, total: total.data.length };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUserById = async (id: string | null) => {
  try {
    const { data } = await axios.get(`${baseURL}/users/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createUser = async (user: User) => {
  try {
    const { data } = await axios.post(`${baseURL}/users`, user);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateUser = async (id: string, user: User) => {
  try {
    const { data } = await axios.put(`${baseURL}/users/${id}`, user);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const { data } = await axios.delete(`${baseURL}/users/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
