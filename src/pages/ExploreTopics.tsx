import { Box, Typography } from '@mui/material';
import CourseItem from '../components/explore-topics/CourseItem';
import RecentActivity from '../components/explore-topics/RecentActivity';
import { courseData } from '../../mockData';

const ExploreTopics = () => {
  return (
    <Box>
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
          sx={{ fontWeight: 700, fontSize: '40px', textAlign: 'center', mt: 2 }}
        >
          Recommended Courses
        </Typography>

        <Box
          sx={{
            mt: 5,
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            justifyContent: 'center',
            justifyItems: 'center',
            columnGap: 2,
            rowGap: 2,

            '@media (max-width: 1200px)': {
              gridTemplateColumns: 'repeat(3, 1fr)',
            },
            '@media (max-width: 900px)': {
              gridTemplateColumns: 'repeat(2, 1fr)',
              rowGap: 4,
            },
            '@media (max-width: 640px)': {
              gridTemplateColumns: 'repeat(1, 1fr)',
            },
          }}
        >
          {courseData.map((course, index) => (
            <CourseItem
              key={index}
              image={course.image}
              name={course.name}
              description={course.description}
            />
          ))}
        </Box>
      </Box>

      <RecentActivity />
    </Box>
  );
};

export default ExploreTopics;
