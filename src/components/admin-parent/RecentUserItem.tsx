import { Box, Typography } from '@mui/material';

type RecentUserItemProps = {
  image: string;
  first_name: string;
  last_name: string;
  role: string;
};

const RecentUserItem = ({
  image,
  first_name,
  last_name,
  role,
}: RecentUserItemProps) => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        width: '340px',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '24px',

        '@media (max-width: 1280px)': {
          width: '280px',
          height: '260px',
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: 'hsla(0, 0%, 100%, 0.2)',
          borderRadius: '50%',
          width: '100px',
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: '12px',
        }}
      >
        <Box
          component='img'
          src={image}
          alt={`${first_name} ${last_name} Profile Picture`}
          sx={{ width: '60px', height: '60px' }}
        />
      </Box>
      <Typography sx={{ fontWeight: 400, fontSize: '20px', mb: '4px' }}>
        {first_name} {last_name}
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: '16px',
          color: 'hsla(0, 0%, 100%, 0.5)',
        }}
      >
        {role}
      </Typography>
    </Box>
  );
};

export default RecentUserItem;
