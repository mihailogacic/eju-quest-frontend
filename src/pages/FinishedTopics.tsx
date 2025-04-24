import { Box, Typography, CircularProgress } from '@mui/material';
import SessionReviewsItem from '../components/admin-parent/SessionReviewsItem';
import { useFinishedTopics } from '../hooks/lessons-hook';

const FinishedTopics = () => {
  const { data: lessons, isPending, isError } = useFinishedTopics();
  console.log(lessons);

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
      <Typography
        sx={{ fontSize: '40px', fontWeight: 700, textAlign: 'center', mb: 2 }}
      >
        Finished Topics
      </Typography>
      <Typography sx={{ fontWeight: 400, textAlign: 'center' }}>
        Review and take action on finished topics items.
      </Typography>

      {isPending ? (
        <Box display='flex' justifyContent='center' mt={6}>
          <CircularProgress />
        </Box>
      ) : isError ? (
        <Typography color='error' textAlign='center' mt={4}>
          Failed to load pending lessons.
        </Typography>
      ) : (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns:
              lessons.length > 0 ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)',
            justifyContent: 'center',
            justifyItems: 'center',
            maxWidth: '1120px',
            width: '100%',
            mx: 'auto',
            px: 2,
            columnGap: 2,
            rowGap: '20px',
            my: 6,

            '@media (max-width: 900px)': {
              gridTemplateColumns: 'repeat(1, 1fr)',
            },
          }}
        >
          {lessons.length > 0 ? (
            lessons.map((lesson) => (
              <SessionReviewsItem
                key={lesson.id}
                image={lesson.lesson_image}
                title={lesson.title}
                // description='Description'
                passed={lesson.passed}
                role={lesson.child_username}
                id={lesson.id}
                isFinished
                childId={lesson.child_id}
              />
            ))
          ) : (
            <Typography
              sx={(theme) => ({
                fontSize: '14px',
                color: theme.palette.text.noData,
              })}
            >
              No finished topics found.
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default FinishedTopics;
