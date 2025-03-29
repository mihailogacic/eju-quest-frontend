import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import ContentReviewHeader from '../components/content-review/ContentReviewHeader';
import { useLessonDetail } from '../hooks/lessons-hook';

const ContentReviewDetail = () => {
  const { id } = useParams();

  const { data, isPending, isError } = useLessonDetail(id as string);

  if (isPending) return <Typography>Loading...</Typography>;
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
          mt: 5,
          mb: 10,
        })}
      >
        {data.sections.map((section, index) => (
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
            <Typography sx={{ fontSize: '14px' }}>{section.content}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ContentReviewDetail;
