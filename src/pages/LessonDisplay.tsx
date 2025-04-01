import { Box, Typography } from '@mui/material';
import BackCircle from '../components/common/BackCircle';
import lessonPlaceholder from '../assets/images/lesson-placeholder.png';
import CustomButton from '../components/common/CustomButton';

const LessonDisplay = () => {
  const handleLessonSummary = () => {
    console.log('lesson summary clicked');
  };

  const handleQuiz = () => {
    console.log('quiz clicked');
  };

  return (
    <Box
      sx={{
        px: 12,
        py: 8,
        '@media (max-width: 1280px)': {
          px: 8,
          py: 6,
        },
        '@media (max-width: 768px)': {
          px: 6,
          py: 5,
        },
        '@media (max-width: 640px)': {
          p: 2,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          '@media (max-width: 768px)': {
            gap: '12px',
          },
        }}
      >
        <BackCircle
          redirect={-1}
          isBlackArrow={false}
          sx={{
            position: 'inherit',
            top: 'inherit',
            left: 'inherit',

            '@media (max-width: 768px)': {
              height: '36px',
              width: '36px',
            },
          }}
        />
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '40px',
            lineHeight: 1.2,
            '@media (max-width: 768px)': {
              fontSize: '32px',
            },
          }}
        >
          Mastering Illustration
        </Typography>
      </Box>

      <Box
        sx={{
          mt: '20px',
          mb: 6,
          height: '304px',
          '@media (min-width: 1920px)': { height: '364px' },
        }}
      >
        <Box
          component='img'
          src={lessonPlaceholder}
          alt='Lesson Image'
          sx={{
            width: '100%',
            objectFit: 'cover',
            height: '100%',
            borderRadius: '24px',
          }}
        />
      </Box>

      <Box
        sx={(theme) => ({
          color: theme.palette.text.charredBrown,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          mb: 3,
        })}
      >
        <Box>
          <Typography sx={{ fontSize: '24px', fontWeight: 700, mb: 1 }}>
            Course Details
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan.
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '24px', fontWeight: 700, mb: 1 }}>
            Certification
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit.
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '24px', fontWeight: 700, mb: 1 }}>
            Who this course is for
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit.
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '24px', fontWeight: 700, mb: 1 }}>
            Certification
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit.
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '24px', fontWeight: 700, mb: 1 }}>
            Who this course is for
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit.
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '24px', fontWeight: 700, mb: 1 }}>
            Course Details
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: 1,
          justifyContent: 'end',
          mb: 2,
          mt: 4,
          '@media (max-width: 640px)': {
            justifyContent: 'center',
          },
        }}
      >
        <CustomButton
          onClick={handleLessonSummary}
          sx={{
            border: '1px solid black',
            width: '100%',
            maxWidth: '180px',
            lineHeight: 1.1,
            height: '48px',
            '@media (max-width: 640px)': { maxWidth: '100%' },
          }}
        >
          Lesson Summary
        </CustomButton>
        <CustomButton
          buttonType='text'
          onClick={handleQuiz}
          sx={{
            backgroundColor: 'black',
            width: '100%',
            maxWidth: '180px',
            lineHeight: 1.1,
            height: '48px',
            '@media (max-width: 640px)': { maxWidth: '100%' },
          }}
        >
          Quiz
        </CustomButton>
      </Box>
    </Box>
  );
};

export default LessonDisplay;
