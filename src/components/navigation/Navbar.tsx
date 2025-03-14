import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from '../common/CustomButton';
import logo from '../../assets/images/logo.png';
import useAuthStore from '../../store/auth-store';

const authLinks = {
  fontSize: '14px',
  fontWeight: 400,
  mx: '6px',
  '@media (max-width: 1280px)': { mx: 0 },
};

const Navbar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

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
      {!isAuthenticated ? (
        <Box
          sx={{
            '@media (max-width: 440px)': { transform: 'scale(0.9)' },
            '@media (max-width: 340px)': { transform: 'scale(0.8)' },
          }}
        >
          <CustomButton
            buttonType='text'
            onClick={() => {
              navigate('/sign-in');
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
          >
            Log in
          </CustomButton>
          <CustomButton
            onClick={() => {
              navigate('/sign-up');
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
          >
            Sign up
          </CustomButton>
        </Box>
      ) : (
        <Box
          sx={{
            '@media (max-width: 440px)': { transform: 'scale(0.9)' },
            '@media (max-width: 340px)': { transform: 'scale(0.8)' },
          }}
        >
          <CustomButton
            buttonType='text'
            onClick={handleDrawerToggle}
            sx={{
              display: 'none',

              '@media (max-width: 960px)': {
                display: 'flex',
                alignItems: 'center',
              },
            }}
          >
            {!open ? (
              <MenuIcon sx={{ fontSize: '30px', transform: 'scaleY(1.2)' }} />
            ) : (
              <CloseIcon sx={{ fontSize: '30px' }} />
            )}
          </CustomButton>

          <Box
            sx={{
              display: 'block',

              '@media (max-width: 960px)': {
                display: 'none',
              },
            }}
          >
            <CustomButton
              buttonType='text'
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
              sx={authLinks}
            >
              User Management
            </CustomButton>
            <CustomButton
              buttonType='text'
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
              sx={authLinks}
            >
              Content Generation
            </CustomButton>
            <CustomButton
              buttonType='text'
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
              sx={authLinks}
            >
              Session Reviews
            </CustomButton>
            <CustomButton
              buttonType='text'
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
              sx={authLinks}
            >
              Rewards Management
            </CustomButton>
          </Box>
        </Box>
      )}

      <Drawer anchor='right' open={open} onClose={handleDrawerToggle}>
        <Box
          sx={{
            pt: '104px',
            width: 300,
            '@media (max-width: 768px)': {
              width: 280,
            },
            '@media (max-width: 640px)': {
              width: '100vw',
              pt: '90px',
            },
          }}
        >
          <List>
            <ListItem component='div'>
              <ListItemText primary='User Management' />
            </ListItem>
            <ListItem component='div'>
              <ListItemText primary='Content Generation' />
            </ListItem>
            <ListItem component='div'>
              <ListItemText primary='Session Reviews' />
            </ListItem>
            <ListItem component='div'>
              <ListItemText primary='Rewards Management' />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
