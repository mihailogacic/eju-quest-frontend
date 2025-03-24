import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../../store/auth-store';

type PublicRouteProps = {
  children: ReactNode;
};

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to='/admin' />;
  }

  return children;
};

export default PublicRoute;
