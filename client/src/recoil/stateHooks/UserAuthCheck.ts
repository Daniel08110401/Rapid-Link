import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userLogInState } from '../atoms/userState';

export const useAuthCheck = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useRecoilValue(userLogInState);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated;
};
