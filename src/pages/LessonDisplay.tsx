import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, CircularProgress } from '@mui/material';
import CustomButton from '../components/common/CustomButton';
import BackCircle from '../components/common/BackCircle';
import { useLessonDetail } from '../hooks/lessons-hook';
import lessonPlaceholder from '../assets/images/no-image.webp';

const LessonDisplay = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isPending, isError } = useLessonDetail(id as string);

  const handleLessonSummary = () => {
    navigate(`/lesson-summary/${id}`, { state: { title: data?.title } });
  };

  const handleQuiz = () => {
    navigate(`/quiz/${id}`);
  };

  if (isPending)
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 6,
        }}
      >
        <CircularProgress />
      </Box>
    );
  if (isError || !data) return <Typography>Error loading data</Typography>;

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
          {data?.title}
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
          src={data?.image || lessonPlaceholder}
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
        {data.sections.length > 0 ? (
          data.sections.map((section, index) => (
            <Box key={index}>
              <Typography sx={{ fontSize: '24px', fontWeight: 700, mb: 1 }}>
                {section.heading}
              </Typography>
              <Typography>{section.content}</Typography>
            </Box>
          ))
        ) : (
          <Typography sx={{ fontSize: '14px', textAlign: 'center' }}>
            No content available for this lesson.
          </Typography>
        )}
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
