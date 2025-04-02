import { Box, Typography, CircularProgress } from '@mui/material';
import RecentActivityCard from './RecentActivityCard';
import { RecentActivityTypes } from '../../types/lessons-types';

type RecentActivityProps = {
  cardData: RecentActivityTypes[] | null;
  isLoading?: boolean;
  isError?: boolean;
};

const RecentActivity = ({
  cardData,
  isLoading = false,
  isError = false,
}: RecentActivityProps) => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        borderBottom: '1px solid white',
        px: 12,
        py: 8,
        // flexGrow: 1,
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
          py: 5,
        },
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          mb: 4,
        }}
      >
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
          mb: 2,

          '@media (max-width: 768px)': {
            gridTemplateColumns: 'repeat(1, 1fr)',
          },
        }}
      >
        {isLoading ? (
          <Box
            display='flex'
            justifyContent='center'
            py={2}
            gridColumn='1 / -1'
          >
            <CircularProgress size={32} sx={{ color: 'white' }} />
          </Box>
        ) : isError ? (
          <Typography
            variant='body2'
            color='error'
            align='center'
            sx={{ gridColumn: '1 / -1' }}
          >
            Failed to load recent activity.
          </Typography>
        ) : cardData && cardData.length > 0 ? (
          cardData.map((card, index) => (
            <RecentActivityCard
              key={index}
              // profile_picture=''
              // first_name='NaN'
              // last_name='NaN'
              image={card.image}
              title={card.title}
              // hashtags={['learning']}
              id={card.id}
            />
          ))
        ) : (
          <Typography
            variant='body2'
            color='text.secondary'
            align='center'
            sx={{ gridColumn: '1 / -1', color: 'hsla(0, 0%, 100%, 0.6)' }}
          >
            No recent activity found.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default RecentActivity;
