import { Box, Typography } from '@mui/material';
import CustomButton from '../components/common/CustomButton';
import profilePlaceholder from '../assets/images/profile-placeholder.png';
import starImg from '../assets/images/star.png';
import hourglassImg from '../assets/images/hourglass.png';
import BackCircle from '../components/common/BackCircle';

const UserProfile = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 104px)',

        '@media (max-width: 640px)': {
          minHeight: 'calc(100vh - 90px)',
        },
      }}
    >
      <Box
        sx={(theme) => ({
          backgroundColor: 'black',
          color: 'white',
          border: `2px solid ${theme.palette.text.midGray}`,
          borderRadius: '24px',
          py: 8,
          px: 20,
          mx: 2,
          position: 'relative',

          '@media (max-width: 900px)': {
            px: 12,
          },
          '@media (max-width: 700px)': {
            width: '100%',
            px: 4,
          },

          '@media (max-width: 470px)': {
            px: 2,
            py: 7,
          },

          '@media (max-width: 440px)': {
            mx: 1,
          },
        })}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '476px',

            '@media (max-width: 700px)': {
              width: '100%',
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

              '@media (max-width: 370px)': {
                gap: '12px',
              },
            }}
          >
            <Box
              component='img'
              src={profilePlaceholder}
              alt='profile picture'
              sx={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                '@media (max-width: 640px)': {
                  width: '90px',
                  height: '90px',
                },
              }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>
                Alice
              </Typography>
              <Typography
                sx={{
                  backgroundColor: 'white',
                  border: '0.5px solid hsla(0, 0%, 0%, 0.1)',
                  color: 'black',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '2px 4px',
                  borderRadius: '100px',
                  width: '60px',
                  fontSize: '12px',
                }}
              >
                Child
              </Typography>
            </Box>
          </Box>

          <CustomButton
            sx={{ width: '160px', height: '48px', ml: 3, lineHeight: 1.1 }}
          >
            Edit Profile
          </CustomButton>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            sx={{
              fontSize: '40px',
              fontWeight: 400,
              textAlign: 'center',
              mt: 6,
              mb: 4,

              '@media (max-width: 640px)': {
                fontSize: '30px',
              },
            }}
          >
            Reward Information
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mx: 4,

              '@media (max-width: 370px)': {
                mx: 2,
              },
              '@media (max-width: 340px)': {
                mx: 1,
              },
            }}
          >
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'hsla(0, 0%, 100%, 0.1)',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  mx: 'auto',
                  mb: 2,

                  '@media (max-width: 640px)': {
                    width: '90px',
                    height: '90px',
                  },
                }}
              >
                <Box
                  component='img'
                  src={starImg}
                  alt='star image'
                  sx={{ width: '60px', height: '60px' }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: 400,
                  textAlign: 'center',
                  mb: '4px',
                }}
              >
                Reward Balance
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 400,
                  textAlign: 'center',
                  opacity: 0.5,
                }}
              >
                100 points
              </Typography>
            </Box>

            <Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'hsla(0, 0%, 100%, 0.1)',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  mx: 'auto',
                  mb: 2,

                  '@media (max-width: 640px)': {
                    width: '90px',
                    height: '90px',
                  },
                }}
              >
                <Box
                  component='img'
                  src={hourglassImg}
                  alt='hourglass image'
                  sx={{ width: '60px', height: '60px' }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: 400,
                  textAlign: 'center',
                  mb: '4px',
                }}
              >
                Reward Rate
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 400,
                  textAlign: 'center',
                  opacity: 0.5,
                }}
              >
                $1 per lesson
              </Typography>
            </Box>
          </Box>
        </Box>
        <BackCircle
          redirect={-1}
          sx={{
            '@media (max-width: 700px)': {
              top: 16,
              left: 16,
              width: '36px',
              height: '36px',
            },
            '@media (max-width: 470px)': {
              top: 12,
              left: 12,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default UserProfile;
