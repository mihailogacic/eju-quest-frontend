import { Box } from '@mui/material';
import CustomButton from '../common/CustomButton';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        height: '104px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 80px',
        position: 'fixed',
        width: '100%',
        zIndex: 2000,

        '@media (max-width: 1280px)': {
          padding: '0 60px',
        },
        '@media (max-width: 960px)': {
          padding: '0 40px',
        },
        '@media (max-width: 768px)': {
          padding: '0 20px',
        },
        '@media (max-width: 640px)': {
          height: '90px',
        },
        '@media (max-width: 440px)': {
          padding: '0 12px',
        },
        '@media (max-width: 340px)': {
          padding: '0 4px',
        },
      })}
    >
      <Box
        component='img'
        src={logo}
        alt='Eju Quest Logo'
        sx={{
          width: '140px',
          '@media (max-width: 440px)': { transform: 'scale(0.9)' },
          '@media (max-width: 340px)': { transform: 'scale(0.8)' },
        }}
      />
      <Box
        sx={{
          '@media (max-width: 440px)': { transform: 'scale(0.9)' },
          '@media (max-width: 340px)': { transform: 'scale(0.8)' },
        }}
      >
        <CustomButton buttonType='text'>Log in</CustomButton>
        <CustomButton>Sign up</CustomButton>
      </Box>
    </Box>
  );
};

export default Navbar;
