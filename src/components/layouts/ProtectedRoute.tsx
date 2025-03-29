import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuthStore from '../../store/auth-store';

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, user } = useAuthStore();
  const location = useLocation();

  const parentRoutes = [
    '/admin',
    '/reviews',
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

  if (!isAuthenticated) {
    return <Navigate to='/sign-in' replace />;
  }

  if (
    user?.role === 'parent' &&
    !(parentRoutes.includes(currentPath) || currentPath.startsWith('/reviews/'))
  ) {
    return <Navigate to='/' replace />;
  }

  if (user?.role === 'child' && !childRoutes.includes(currentPath)) {
    return <Navigate to='/' replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
