import { Box, Typography } from '@mui/material';

const Timeout = () => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.text.lightGreen,
        display: 'flex',
        justifyContent: 'center',
        py: '12px',
      })}
    >
      <Typography
        sx={{ fontSize: '18px', fontWeight: 700, textAlign: 'center' }}
      >
        Timeout: 00:35
      </Typography>
    </Box>
  );
};

export default Timeout;
