import { Box, Typography, CircularProgress } from '@mui/material';
import CourseItem from '../components/explore-topics/CourseItem';
import RecentActivity from '../components/explore-topics/RecentActivity';
import { useApprovedLessons } from '../hooks/lessons-hook';

const ExploreTopics = () => {
  const { data, isPending, isError } = useApprovedLessons();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 104px - 90px)',

        '@media (max-width: 640px)': {
          minHeight: 'calc(100vh - 180px)',
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: 'black',
          color: 'white',
          borderTop: '1px solid white',
          textAlign: 'center',
          p: 8,
        }}
      >
        <Typography
          sx={{
            fontSize: '40px',
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 1,
            '@media (max-width: 768px)': {
              fontSize: '32px',
            },
          }}
        >
          Explore Approved Topics
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 400,
            color: 'hsla(0, 0%, 100%, 0.6)',
          }}
        >
          Discover and Learn from a variety of topics
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          px: 12,
          py: 8,
          mb: 3,
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
          sx={{ fontWeight: 700, fontSize: '40px', textAlign: 'center', mt: 2 }}
        >
          Recommended Courses
        </Typography>

        <Box
          sx={{
            mt: 5,
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            justifySelf: 'center',
            gap: 2,

            '@media (max-width: 1200px)': {
              gridTemplateColumns: 'repeat(3, 1fr)',
            },
            '@media (max-width: 900px)': {
              gridTemplateColumns: 'repeat(2, 1fr)',
            },
            '@media (max-width: 640px)': {
              gridTemplateColumns: 'repeat(1, 1fr)',
            },
          }}
        >
          {isPending ? (
            <Box
              display='flex'
              justifyContent='center'
              py={2}
              gridColumn='1 / -1'
            >
              <CircularProgress size={32} />
            </Box>
          ) : isError ? (
            <Typography
              variant='body2'
              color='error'
              align='center'
              sx={{ gridColumn: '1 / -1' }}
            >
              Failed to load approved lessons.
            </Typography>
          ) : data?.recommended_courses?.length > 0 ? (
            data.recommended_courses.map((course, index) => (
              <CourseItem
                key={index}
                id={course.id}
                image={course.image}
                name={course.title}
                description=''
              />
            ))
          ) : (
            <Typography
              variant='body2'
              color='text.secondary'
              align='center'
              sx={{ gridColumn: '1 / -1' }}
            >
              No courses found.
            </Typography>
          )}
        </Box>
      </Box>

      <RecentActivity
        cardData={data?.recent_activity || []}
        isLoading={isPending}
        isError={isError}
      />
    </Box>
  );
};

export default ExploreTopics;
