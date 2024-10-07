import {signIn} from '@junobuild/core';
import {Button} from './Button';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    signIn().then(() => {
      navigate('/home');
    })
  };

  return <Button onClick={handleSignIn}>Sign in</Button>;
};
