import { Box, Typography } from '@mui/material';
import CustomButton from '../common/CustomButton';

type FeatureSectionTypes = {
  image: string;
  title: string;
  content: string;
  rightSide?: boolean;
};

const FeatureSection = ({
  image,
  title,
  content,
  rightSide = false,
}: FeatureSectionTypes) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        margin: '60px 20px',

        '@media (max-width: 640px)': {
          margin: '20px',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,

          '@media (max-width: 1279px)': {
            gap: 0,
          },

          '@media (max-width: 1080px)': {
            flexDirection: rightSide ? 'column-reverse' : 'column',
          },
        }}
      >
        {!rightSide && (
          <Box
            component='img'
            src={image}
            alt='image'
            sx={{
              maxWidth: '620px',
              '@media (max-width: 1080px)': {
                objectPosition: '20px center',
                marginBottom: '20px',
              },
              '@media (max-width: 640px)': {
                maxWidth: '100%',
              },
            }}
          />
        )}

        <Box
          sx={{
            maxWidth: '520px',
            padding: '20px',
            '@media (max-width: 1080px)': {
              maxWidth: '100%',
            },
          }}
        >
          <Typography
            sx={(theme) => ({
              fontSize: '48px',
              fontWeight: 600,
              color: theme.palette.text.charredBrown,
              marginBottom: '12px',
              lineHeight: 1.3,

              '@media (max-width: 1080px)': {
                fontSize: '36px',
              },
            })}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: '24px',
              color: 'rgba(31, 28, 20, 0.8)',
              marginBottom: '32px',

              '@media (max-width: 1080px)': {
                fontSize: '20px',
              },
            }}
          >
            {content}
          </Typography>

          <CustomButton
            sx={{
              backgroundColor: '#1c1c1c',
              color: 'white',
              padding: '14px 40px',

              '&:hover': {
                backgroundColor: '#2c2c2c',
              },
            }}
          >
            Get Started
          </CustomButton>
        </Box>

        {rightSide && (
          <Box
            component='img'
            src={image}
            alt='image'
            sx={{
              maxWidth: '620px',
              objectFit: 'contain',
              objectPosition: '90px center',

              '@media (max-width: 1080px)': {
                objectPosition: '20px center',
                marginBottom: '20px',
              },
              '@media (max-width: 640px)': {
                maxWidth: '100%',
              },
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default FeatureSection;
