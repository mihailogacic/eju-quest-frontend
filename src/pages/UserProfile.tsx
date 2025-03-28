import { useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import CustomButton from '../components/common/CustomButton';
import CustomModal from '../components/common/CustomModal';
import BackCircle from '../components/common/BackCircle';
import EditUserProfile from '../components/modals/EditUserProfile';
import { useUserProfile } from '../hooks/auth-hook';
import { capitalize } from '../utils/helper-functions';
import profilePlaceholder from '../assets/images/profile-placeholder.jpg';
import starImg from '../assets/images/star.png';
import hourglassImg from '../assets/images/hourglass.png';

const UserProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isPending } = useUserProfile();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (isPending) {
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
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
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
                justifyContent: 'space-around',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,

                '@media (max-width: 640px)': {
                  gap: 3,
                },

                '@media (max-width: 480px)': {
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
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: '24px',
                    lineHeight: 1.2,
                    '@media (max-width: 640px)': {
                      fontSize: '20px',
                    },
                  }}
                >
                  {data?.first_name || ''} {data?.last_name || ''}
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
                  {capitalize(data?.role || '')}
                </Typography>
              </Box>
            </Box>

            <CustomButton
              onClick={() => setIsModalOpen(true)}
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
                  mb: 2,
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
                gap: 2,

                '@media (max-width: 700px)': {
                  justifyContent: 'space-around',
                },
                '@media (max-width: 480px)': {
                  justifyContent: 'space-between',
                },
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
                      width: '80px',
                      height: '80px',
                      mb: 1,
                    },
                  }}
                >
                  <Box
                    component='img'
                    src={starImg}
                    alt='star image'
                    sx={{
                      width: '60px',
                      height: '60px',
                      '@media (max-width: 640px)': {
                        width: '45px',
                        height: '45px',
                      },
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: 400,
                    textAlign: 'center',
                    mb: '4px',
                    lineHeight: 1.2,
                    '@media (max-width: 640px)': {
                      mb: 0,
                    },
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
                      width: '80px',
                      height: '80px',
                      mb: 1,
                    },
                  }}
                >
                  <Box
                    component='img'
                    src={hourglassImg}
                    alt='hourglass image'
                    sx={{
                      width: '60px',
                      height: '60px',
                      '@media (max-width: 640px)': {
                        width: '45px',
                        height: '45px',
                      },
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: 400,
                    textAlign: 'center',
                    mb: '4px',
                    lineHeight: 1.2,
                    '@media (max-width: 640px)': {
                      mb: 0,
                    },
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
      <CustomModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <EditUserProfile />
      </CustomModal>
    </>
  );
};

export default UserProfile;
