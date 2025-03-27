import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';

type UserDashboardProps = {
  search: string;
  setSearch: (value: string) => void;
  onAddUser: () => void;
  onSearchTrigger: (value: string) => void;
};

const UserDashboard = ({
  search,
  setSearch,
  onAddUser,
  onSearchTrigger,
}: UserDashboardProps) => {
  useEffect(() => {
    const debounce = setTimeout(() => {
      onSearchTrigger(search);
    }, 500);

    return () => clearTimeout(debounce);
  }, [search, onSearchTrigger]);

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
        <CustomButton
          onClick={onAddUser}
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
