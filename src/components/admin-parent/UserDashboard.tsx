import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import { SingleUser } from '../../types/users-types';
import { filterUsersBySearch } from '../../utils/helper-functions';

type UserDashboardProps = {
  search: string;
  setSearch: (value: string) => void;
  onSearchTrigger: (value: string) => void;
  searchResults: SingleUser[];
  isVisible: boolean;
  isPending: boolean;
};

const UserDashboard = ({
  search,
  setSearch,
  onSearchTrigger,
  searchResults,
  isVisible,
  isPending,
}: UserDashboardProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const debounce = setTimeout(() => {
      onSearchTrigger(search);
    }, 500);

    return () => clearTimeout(debounce);
  }, [search, onSearchTrigger]);

  const filteredResults = filterUsersBySearch(searchResults, search, 'child');

  return (
    <Box
      sx={{
        color: 'white',
        backgroundColor: 'black',
        p: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '24px',
        '@media (max-width: 640px)': {
          py: 5,
          px: 2,
        },
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '40px',
          mb: 1,
          textAlign: 'center',
          lineHeight: 1.2,
          mx: 2,

          '@media (max-width: 768px)': {
            fontSize: '32px',
          },
        }}
      >
        Welcome to the User Dashboard
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: '14px',
          color: 'hsla(0, 0%, 100%, 0.6)',
          textAlign: 'center',

          '@media (max-width: 768px)': {
            mt: '4px',
          },
        }}
      >
        Manage all aspects of user interactions
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: '20px',
          mt: 4,
          '@media (max-width: 640px)': {
            flexDirection: 'column',
          },
        }}
      >
        <Box sx={{ position: 'relative', width: '100%', maxWidth: '360px' }}>
          <CustomInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search'
            startIcon={
              <SearchIcon
                sx={(theme) => ({
                  color: theme.palette.text.silver,
                })}
              />
            }
            sx={{
              borderRadius: '120px',
              border: '2px solid #ededed33',
              width: '100%',
              maxWidth: '360px',
            }}
          />
          {isVisible && (
            <Box
              sx={{
                position: 'absolute',
                backgroundColor: '#fff',
                color: '#000',
                borderRadius: '8px',
                boxShadow: 3,
                mt: '4px',
                width: '100%',
                maxWidth: '360px',
                zIndex: 10,
                py: 1,
              }}
            >
              {isPending ? (
                <Box display='flex' justifyContent='center' py={2}>
                  <CircularProgress size={24} />
                </Box>
              ) : filteredResults.length > 0 ? (
                filteredResults.map((user, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      mb: 1,
                      cursor: 'pointer',
                      '&:hover': { backgroundColor: '#f5f5f5' },
                      p: 2,
                    }}
                    onClick={() => navigate('/user-management')}
                  >
                    <Typography variant='body2' fontWeight={500}>
                      {user.first_name} {user.last_name}
                    </Typography>
                    <Typography variant='caption' color='text.secondary'>
                      {user.email}
                    </Typography>
                  </Box>
                ))
              ) : (
                <Typography
                  variant='body2'
                  color='text.secondary'
                  align='center'
                >
                  No results found.
                </Typography>
              )}
            </Box>
          )}
        </Box>
        <CustomButton
          onClick={() => navigate('/add-children')}
          sx={{
            height: '48px',
            width: '240px',
            '@media (max-width: 640px)': {
              width: '100%',
            },
          }}
        >
          Create New user
        </CustomButton>
      </Box>
    </Box>
  );
};

export default UserDashboard;
