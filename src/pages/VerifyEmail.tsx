import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useVerifyEmail } from '../hooks/auth-hook';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const VerifyEmail = () => {
  const { uid = '', token = '' } = useParams();
  const navigate = useNavigate();
  const { mutate } = useVerifyEmail(uid, token);

  useEffect(() => {
    mutate(undefined, {
      onSuccess: () => {
        navigate('/sign-in', { state: { emailVerified: true } });
      },
      onError: () => {
        navigate('/sign-in', { state: { emailVerified: false } });
      },
    });
  }, [mutate, navigate, uid, token]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default VerifyEmail;
