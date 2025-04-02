import { useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import AdminHeader from '../components/admin-parent/AdminHeader';
import UserDashboard from '../components/admin-parent/UserDashboard';
import RecentUserItem from '../components/admin-parent/RecentUserItem';
import SessionReviewsItem from '../components/admin-parent/SessionReviewsItem';
import { useDashboardUsers, useGetUsers } from '../hooks/users-hook';
import { sessionReviewsData } from '../../mockData';

const AdminParent = () => {
  const [search, setSearch] = useState('');
  const [submittedSearch, setSubmittedSearch] = useState('');

  const { data: users, isPending: isUserPending } = useGetUsers();

  const { data: searchUsers, isPending } = useDashboardUsers(submittedSearch);

  const handleSearchTrigger = (value: string) => {
    setSubmittedSearch(value);
  };

  const filteredUsers = Array.isArray(users?.users)
    ? users.users.filter((user) => user.role === 'child')
    : [];

  return (
    <Box>
      <AdminHeader />

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
        <UserDashboard
          search={search}
          setSearch={setSearch}
          onSearchTrigger={handleSearchTrigger}
          searchResults={
            Array.isArray(searchUsers?.users) ? searchUsers.users : []
          }
          isVisible={search.trim().length > 0}
          isPending={isPending}
        />
      </Box>

      <Box
        sx={{
          my: 10,
          '@media (max-width: 768px)': {
            my: 5,
          },
        }}
      >
        <Typography
          sx={{ fontSize: '40px', fontWeight: 700, textAlign: 'center', mb: 5 }}
        >
          Recent Users
        </Typography>

        {isUserPending ? (
          <Box display='flex' justifyContent='center' py={4}>
            <CircularProgress size={32} />
          </Box>
        ) : filteredUsers.length === 0 ? (
          <Typography textAlign='center' py={4} fontSize={18}>
            No child users found.
          </Typography>
        ) : (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 4,
              justifySelf: 'center',

              '@media (max-width: 1440px)': {},

              '@media (max-width: 900px)': {
                gridTemplateColumns: 'repeat(2, 1fr)',
              },

              '@media (max-width: 680px)': {
                gridTemplateColumns: 'repeat(1, 1fr)',
                gap: 3,
              },
            }}
          >
            {filteredUsers.map((user, index) => (
              <RecentUserItem
                key={index}
                image={user.profile_image}
                first_name={user.first_name}
                last_name={user.last_name}
                role={user.role}
              />
            ))}
          </Box>
        )}
      </Box>

      <Box
        sx={{
          my: 16,
          '@media (max-width: 768px)': {
            my: 8,
          },
        }}
      >
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
            columnGap: 3,
            rowGap: '24px',

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
              id={review.id}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminParent;
