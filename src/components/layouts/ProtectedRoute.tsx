import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import useAuthStore from '../../store/auth-store';

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isSessionReady, user } = useAuthStore();
  const location = useLocation();

  const parentRoutes = [
    '/admin',
    '/pending-content',
    '/finished-topics',
    '/add-topic',
    '/user-management',
    '/add-children',
  ];
  const childRoutes = [
    '/user-profile',
    '/explore-topics',
    '/lesson',
    '/quiz',
    '/lesson-summary',
  ];

  const currentPath = location.pathname;

  if (!isSessionReady) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress aria-label='Checking session' />
      </Box>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to='/sign-in' replace />;
  }

  if (
    user?.role === 'parent' &&
    !(
      parentRoutes.some((route) => currentPath.startsWith(route)) ||
      currentPath.startsWith('/pending-content/')
    )
  ) {
    return <Navigate to='/' replace />;
  }

  if (
    user?.role === 'child' &&
    !childRoutes.some((route) => currentPath.startsWith(route))
  ) {
    return <Navigate to='/' replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
