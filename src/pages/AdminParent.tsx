import { Box, Typography } from '@mui/material';
import AdminHeader from '../components/admin-parent/AdminHeader';
import UserDashboard from '../components/admin-parent/UserDashboard';
import RecentUserItem from '../components/admin-parent/RecentUserItem';
import SessionReviewsItem from '../components/admin-parent/SessionReviewsItem';
import { recentUsersData, sessionReviewsData } from '../../mockData';

const AdminParent = () => {
  return (
    <Box>
      <AdminHeader />

      <Box
        sx={{
          my: 5,
          mx: 'auto',
          width: '85%',
          maxWidth: '1224px',
          '@media (max-width: 1080px)': {
            width: '90%',
          },
        }}
      >
        <UserDashboard />
      </Box>

      <Box sx={{ my: 10 }}>
        <Typography
          sx={{ fontSize: '40px', fontWeight: 700, textAlign: 'center', mb: 5 }}
        >
          Recent Users
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 3,
            justifyContent: 'center',
            justifyItems: 'center',
            width: '1200px',
            mx: 'auto',

            '@media (max-width: 1439px)': {
              width: '90%',
              mx: 'auto',
            },

            '@media (max-width: 900px)': {
              justifyContent: 'center',
              justifyItems: 'center',
              gridTemplateColumns: 'repeat(2, 1fr)',
              mx: 'auto',
              width: '600px',
            },

            '@media (max-width: 680px)': {
              gridTemplateColumns: 'repeat(1, 1fr)',
              width: '100%',
            },
          }}
        >
          {recentUsersData.map((user, index) => (
            <RecentUserItem
              key={index}
              image={user.image}
              first_name={user.first_name}
              last_name={user.last_name}
              role={user.role}
            />
          ))}
        </Box>
      </Box>

      <Box sx={{ my: 16 }}>
        <Typography
          sx={{ fontSize: '40px', fontWeight: 700, textAlign: 'center', mb: 5 }}
        >
          Session Reviews
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

            '@media (max-width: 900px)': {
              gridTemplateColumns: 'repeat(1, 1fr)',
            },
          }}
        >
          {sessionReviewsData.map((review, index) => (
            <SessionReviewsItem
              key={index}
              image={review.image}
              title={review.title}
              description={review.description}
              status={review.status}
              role={review.role}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminParent;
