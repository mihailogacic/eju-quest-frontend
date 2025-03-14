import { useNavigate } from 'react-router-dom';
import { Box, Typography, Link } from '@mui/material';
import BottomMaskImg from '../assets/images/bottom-mask.png';
import CustomButton from '../components/common/CustomButton';
import chevronRightIcon from '../assets/icons/chevron-right.png';
import successImg from '../assets/images/success-mark.png';

const PasswordChanged = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
        py: 6,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(89, 89, 89, 0.2)',
          border: '2px solid rgba(141, 141, 141, 0.2)',
          borderRadius: '24px',
          px: 12,
          py: 6,
          mx: 2,

          '@media (max-width: 640px)': {
            px: 6,
            width: '100%',
          },
          '@media (max-width: 480px)': {
            px: 2,
            mx: 1,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            component='img'
            src={successImg}
            alt='success mark image'
            sx={{
              textAlign: 'center',
              height: '88px',
              width: '88px',
              mb: 2,
            }}
          />
        </Box>

        <Box
          sx={{
            width: '440px',
            mx: 'auto',

            '@media (max-width: 640px)': {
              width: '100%',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: '30px',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Password Changed!
          </Typography>

          <Typography
            sx={{ textAlign: 'center', mb: 6, opacity: 0.8, fontWeight: 400 }}
          >
            Your password has been changed successfully.
          </Typography>

          <CustomButton
            onClick={() => navigate('/sign-in')}
            sx={{
              width: '100%',
              fontSize: '16px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              borderRadius: '100px',
              py: '14px',
            }}
          >
            Continue{' '}
            <Box
              component='img'
              src={chevronRightIcon}
              alt='Chevron right icon'
              sx={{ height: '12px' }}
            />
          </CustomButton>

          <Typography
            sx={(theme) => ({
              color: theme.palette.text.darkGray,
              textAlign: 'center',
              mt: 4,
            })}
          >
            Back to{' '}
            <Link
              onClick={() => navigate('/sign-in')}
              sx={{
                textDecoration: 'underline',
                color: 'white',
                fontWeight: 900,
                cursor: 'pointer',
              }}
            >
              LOG IN
            </Link>
          </Typography>
        </Box>
      </Box>

      <Box
        component='img'
        src={BottomMaskImg}
        alt='Bottom Mask'
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          zIndex: -50,
        }}
      />
    </Box>
  );
};

export default PasswordChanged;
