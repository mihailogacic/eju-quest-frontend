import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress } from '@mui/material';
import ContentReviewHeader from '../components/content-review/ContentReviewHeader';
import { useLessonDetail } from '../hooks/lessons-hook';
import CustomButton from '../components/common/CustomButton';

const ContentReviewDetail = () => {
  const { id } = useParams();

  const { data, isPending, isError } = useLessonDetail(id as string);

  const handleUnapprove = () => {
    console.log('unapprove');
  };

  const handleApprove = () => {
    console.log('approve');
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
      <ContentReviewHeader
        image={data.image}
        title={data.title}
        age_level={data.age_level}
        lesson_length={data.lesson_length}
      />

      <Box
        sx={(theme) => ({
          color: theme.palette.text.charredBrown,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          my: 5,
        })}
      >
        {data.sections.length > 0 ? (
          data.sections.map((section, index) => (
            <Box key={index}>
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {section.heading}
              </Typography>
              <Typography sx={{ fontSize: '14px' }}>
                {section.content}
              </Typography>
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
          justifyContent: 'end',
          gap: 2,
          mb: 3,

          '@media (max-width: 1280px)': {
            gap: 1,
          },
          '@media (max-width: 768px)': {
            justifyContent: 'center',
          },
        }}
      >
        <CustomButton
          onClick={handleUnapprove}
          sx={{
            border: '1px solid black',
            width: '100%',
            maxWidth: '164px',
            '@media (max-width: 768px)': {
              maxWidth: '100%',
            },
          }}
        >
          Un-approve topic
        </CustomButton>
        <CustomButton
          buttonType='text'
          onClick={handleApprove}
          sx={{
            backgroundColor: 'black',
            width: '100%',
            maxWidth: '164px',
            '@media (max-width: 768px)': {
              maxWidth: '100%',
            },
          }}
        >
          Approve
        </CustomButton>
      </Box>
    </Box>
  );
};

export default ContentReviewDetail;
