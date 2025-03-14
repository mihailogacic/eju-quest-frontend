import { Box, Typography } from '@mui/material';
import useAuthStore from '../../store/auth-store';

const Footer = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        height: '104px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '@media (max-width: 640px)': {
          height: '90px',
        },
      })}
    >
      <Typography
        sx={{
          '@media (max-width: 380px)': {
            fontSize: '14px',
          },
        }}
      >
        {!isAuthenticated
          ? '© EjuQuest - 2025'
          : '© 2025 User Management App. All rights reserved.'}
      </Typography>
    </Box>
  );
};

export default Footer;
