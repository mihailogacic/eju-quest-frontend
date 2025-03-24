import { Box, Typography } from '@mui/material';
import RecentActivityCard from './RecentActivityCard';
import { recentActivityData } from '../../../mockData';

const RecentActivity = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        borderBottom: '1px solid white',
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
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography sx={{ fontWeight: 700, fontSize: '40px', mb: 1 }}>
          Recent Activity
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '16px',
            color: 'hsla(0, 0%, 100%, 0.5)',
          }}
        >
          Stay updated on what others are learning
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          justifySelf: 'center',
          columnGap: 3,
          rowGap: 3,

          '@media (max-width: 768px)': {
            gridTemplateColumns: 'repeat(1, 1fr)',
          },
        }}
      >
        {recentActivityData.map((card, index) => (
          <RecentActivityCard
            key={index}
            profile_picture={card.profile_picture}
            first_name={card.first_name}
            last_name={card.last_name}
            image={card.image}
            title={card.title}
            hashtags={card.hashtags}
          />
        ))}
      </Box>
    </Box>
  );
};

export default RecentActivity;
