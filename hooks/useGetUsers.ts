import {useState, useEffect} from 'react';
import { User } from '../types';
import { userAPI } from '../api/UserAPI';


export function useGetUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await userAPI.getUsers();
        setUsers(response);
      } catch (e) {
        setError('Failed to load users');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return {users, loading, error};
}