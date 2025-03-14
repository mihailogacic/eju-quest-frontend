import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../../store/auth-store';

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to='/sign-in' replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
