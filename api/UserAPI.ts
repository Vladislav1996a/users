import axios from 'axios';
import {User} from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const userAPI = {
  async getUsers(): Promise<User[]> {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  },
  async getUserById(id: number): Promise<User> {
    const response = await axios.get(`${API_URL}/users/${id}`);
    return response.data;
  },
};