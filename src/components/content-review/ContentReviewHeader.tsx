import { Box, Typography } from '@mui/material';

type ContentReviewHeaderProps = {
  image: string;
  title: string;
  age_level: number | string;
  lesson_length: string;
};

const ContentReviewHeader = ({
  image,
  title,
  age_level,
  lesson_length,
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
          maxHeight: '308px',
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
          Age level:{' '}
          <Typography component='span' sx={{ fontWeight: 700 }}>
            {age_level}
          </Typography>
        </Typography>
        <Typography>
          Lesson length:{' '}
          <Typography component='span' sx={{ fontWeight: 700 }}>
            {lesson_length}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default ContentReviewHeader;
