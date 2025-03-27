import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import CustomButton from '../common/CustomButton';
import useAuthStore from '../../store/auth-store';
import profilePlaceholder from '../../assets/images/profile-placeholder.png';
import editIcon from '../../assets/icons/edit-icon.png';

const AdminHeader = () => {
  const navigate = useNavigate();
  const { clearAuth } = useAuthStore();

  const handleEditProfilePicture = () => {
    console.log('edit profile picture');
  };

  const handleLogout = () => {
    clearAuth();
    navigate('/sign-in');
  };

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        borderTop: '1px solid white',
        height: '276px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',

        '@media (max-width: 640px)': {
          flexDirection: 'column',
          height: 'auto',
          py: 5,
          gap: 3,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,

          '@media (max-width: 520px)': {
            gap: 3,
          },

          '@media (max-width: 768px)': {
            flexDirection: 'column',
            gap: 1,
            textAlign: 'center',
          },
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Box
            component='img'
            src={profilePlaceholder}
            alt='profile picture'
            sx={{ width: '100px', height: '100px', borderRadius: '50%' }}
          />
          <Box
            component='img'
            src={editIcon}
            alt='Edit Icon'
            onClick={handleEditProfilePicture}
            sx={{
              position: 'absolute',
              right: -10,
              top: 10,
              cursor: 'pointer',
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>
            John Doe
          </Typography>
          <Typography
            sx={(theme) => ({
              fontWeight: 400,
              fontSize: '16px',
              color: theme.palette.text.mediumGray,
            })}
          >
            User Profile and Settings
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: 3,

          '@media (max-width: 900px)': {
            flexDirection: 'column',
            gap: 2,
          },
        }}
      >
        <CustomButton
          buttonType='text'
          onClick={handleLogout}
          sx={{
            border: '1px solid white',
            width: '160px',
            height: '48px',
          }}
        >
          Logout
        </CustomButton>
        <CustomButton sx={{ width: '160px', height: '48px' }}>
          Add New Topic
        </CustomButton>
      </Box>
    </Box>
  );
};

export default AdminHeader;
