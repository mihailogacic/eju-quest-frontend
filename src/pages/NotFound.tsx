import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import CustomButton from '../components/common/CustomButton';
import useAuthStore from '../store/auth-store';

const NotFound = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        p: 2,
      }}
    >
      <Typography sx={{ fontSize: '60px', mb: '-20px' }}>404</Typography>
      <Typography sx={{ fontSize: '20px', mb: 3 }}>Page Not Found</Typography>
      <CustomButton
        onClick={
          !isAuthenticated ? () => navigate('/') : () => navigate('/admin')
        }
        sx={{
          backgroundColor: 'black',
          color: 'white',
          '&:hover': {
            backgroundColor: 'black',
            color: 'white',
          },
        }}
      >
        {!isAuthenticated ? 'Go to Home' : 'Go to Admin'}
      </CustomButton>
    </Box>
  );
};

export default NotFound;
