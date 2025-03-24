import { Box, Typography } from '@mui/material';
import SessionReviewsItem from '../components/admin-parent/SessionReviewsItem';
import { reviewsData } from '../../mockData';

const ContentReviews = () => {
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
        Pending Content
      </Typography>
      <Typography sx={{ fontWeight: 400, textAlign: 'center' }}>
        Review and take action on pending content items.
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
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
        {reviewsData.map((review, index) => (
          <SessionReviewsItem
            key={index}
            image={review.image}
            title={review.title}
            description={review.description}
            status={review.status}
            role={review.role}
            hasEdit={review.hasEdit}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ContentReviews;
