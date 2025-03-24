import { Box, Typography } from '@mui/material';
import ContentReviewHeader from '../components/content-review/ContentReviewHeader';
import checkListTypeIcon from '../assets/icons/check-list-type.png';
import { contentReviewDetailData } from '../../mockData';

const ContentReviewDetail = () => {
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
        image={contentReviewDetailData.image}
        title={contentReviewDetailData.title}
        lesson_number={contentReviewDetailData.lesson_number}
        completion_time={contentReviewDetailData.completion_time}
        students={contentReviewDetailData.students}
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
        <Box>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 700,
              mb: 1,
            }}
          >
            Course Details
          </Typography>
          <Typography sx={{ fontSize: '14px' }}>
            {contentReviewDetailData.course_details}
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 700,
              mb: 1,
            }}
          >
            Certification
          </Typography>
          <Typography sx={{ fontSize: '14px' }}>
            {contentReviewDetailData.certification}
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 700,
              mb: 1,
            }}
          >
            Who this course is for
          </Typography>
          <Typography sx={{ fontSize: '14px' }}>
            {contentReviewDetailData.course_for}
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 700,
              mb: '-12px',
            }}
          >
            What you'll learn in this course:
          </Typography>
        </Box>
        <Box component='ul' sx={{ pl: 0, m: 0, listStyle: 'none' }}>
          {contentReviewDetailData.what_you_learn.map((item, index) => (
            <Box
              key={index}
              component='li'
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.3,
                mb: 1.5,
              }}
            >
              <Box
                component='img'
                src={checkListTypeIcon}
                alt='check icon'
                sx={{ width: 15, height: 15, mt: '3px' }}
              />
              <Typography sx={{ fontSize: '14px' }}>{item}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ContentReviewDetail;
