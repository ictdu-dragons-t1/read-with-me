import {signIn} from '@junobuild/core';
import {Button} from '@mantine/core';
import {useNavigate} from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    signIn().then(() => {
      navigate('/home');
    })
  };

  return <Button onClick={handleSignIn} variant='white' size='lg'><p className='text-black font-medium'>Login with Internet Identity</p></Button>;
};

export default Login;