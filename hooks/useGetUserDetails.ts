import {useState, useEffect} from 'react';
import { User } from '../types';
import { userAPI } from '../api/UserAPI';

export const useGetUserDetails =(userId: number) =>{
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await userAPI.getUserById(userId);
        setUser(response);
      } catch (err) {
        setError('Failed to load user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId]);

  return {user, loading, error};
}
