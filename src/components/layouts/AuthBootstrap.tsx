import { ReactNode, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { refreshSession } from '../../api/auth-session';
import useAuthStore from '../../store/auth-store';

type AuthBootstrapProps = {
  children: ReactNode;
};

const AuthBootstrap = ({ children }: AuthBootstrapProps) => {
  const isSessionReady = useAuthStore((state) => state.isSessionReady);
  const setSessionReady = useAuthStore((state) => state.setSessionReady);

  useEffect(() => {
    let active = true;

    refreshSession()
      .catch(() => undefined)
      .finally(() => {
        if (active) {
          setSessionReady(true);
        }
      });

    return () => {
      active = false;
    };
  }, [setSessionReady]);

  if (!isSessionReady) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress aria-label='Restoring session' />
      </Box>
    );
  }

  return children;
};

export default AuthBootstrap;
