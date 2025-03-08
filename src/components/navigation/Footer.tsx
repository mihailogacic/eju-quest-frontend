import { Box, Typography } from '@mui/material';

const Footer = () => {
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
        &copy; EjuQuest - 2025
      </Typography>
    </Box>
  );
};

export default Footer;
