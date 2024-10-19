import {authSubscribe, signIn} from '@junobuild/core';
import {Button} from '@mantine/core';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthChange = async (user) => {
      if (user) {
        navigate('/home');
      }
    };
    const unsubscribe = authSubscribe(handleAuthChange);
    return () => unsubscribe();
  }, [navigate]);

  const handleSignIn = () => {
    signIn();
  };

  return <Button onClick={handleSignIn} variant='white' size='lg'><p className='text-black font-medium'>Login with Internet Identity</p></Button>;
};

export default Login;