import { Box, Typography } from '@mui/material';

type ContentReviewHeaderProps = {
  image: string;
  title: string;
  lesson_number: number | string;
  completion_time: string;
  students: string;
};

const ContentReviewHeader = ({
  image,
  title,
  lesson_number,
  completion_time,
  students,
}: ContentReviewHeaderProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '16px',
        p: 4,
        gap: 8,
        alignItems: 'center',
        '@media (max-width: 1280px)': {
          flexDirection: 'column',
          alignItems: 'start',
        },
      }}
    >
      <Box
        component='img'
        src={image}
        alt='Content Review Image'
        sx={{
          borderRadius: '12px',
          objectFit: 'cover',
          width: '100%',
          maxWidth: '556px',
          '@media (max-width: 1280px)': {
            maxWidth: '100%',
          },
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '40px',
            '@media (max-width: 768px)': {
              fontSize: '32px',
            },
            '@media (max-width: 640px)': {
              fontSize: '24px',
            },
          }}
        >
          {title}
        </Typography>
        <Typography>
          Number of lessons:{' '}
          <Typography component='span' sx={{ fontWeight: 700 }}>
            {lesson_number} {lesson_number === 1 ? 'Lesson' : 'Lessons'}
          </Typography>
        </Typography>
        <Typography>
          Completion time:{' '}
          <Typography component='span' sx={{ fontWeight: 700 }}>
            {completion_time}
          </Typography>
        </Typography>
        <Typography>
          Students have learned:{' '}
          <Typography component='span' sx={{ fontWeight: 700 }}>
            {students}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default ContentReviewHeader;
