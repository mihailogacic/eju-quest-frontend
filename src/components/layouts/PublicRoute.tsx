import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import useAuthStore from '../../store/auth-store';

type PublicRouteProps = {
  children: ReactNode;
};

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated, isSessionReady, user } = useAuthStore();

  if (!isSessionReady) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress aria-label='Checking session' />
      </Box>
    );
  }

  if (isAuthenticated) {
    if (user?.role === 'child') {
      return <Navigate to='/explore-topics' />;
    } else {
      return <Navigate to='/admin' />;
    }
  }

  return children;
};

export default PublicRoute;
