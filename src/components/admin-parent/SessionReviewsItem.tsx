import { Box, Typography } from '@mui/material';
import editIcon from '../../assets/icons/edit-icon.png';

type SessionReviewsItemProps = {
  image: string;
  title: string;
  description: string;
  status: string;
  role: string;
  hasEdit?: boolean;
};

const SessionReviewsItem = ({
  image,
  title,
  description,
  status,
  role,
  hasEdit = false,
}: SessionReviewsItemProps) => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        gap: 2,
        width: '100%',
        maxWidth: '530px',
        p: 2,
        alignItems: 'center',
        borderRadius: '6px',
        position: 'relative',
      }}
    >
      <Box
        component='img'
        src={image}
        alt={`${title} image`}
        sx={{
          width: '100px',
          height: '128px',
          objectFit: 'cover',
          borderRadius: '10px',
        }}
      />
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 1,
        }}
      >
        <Typography sx={{ fontSize: '20px', fontWeight: 500, lineHeight: 1.2 }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.2 }}>
          {description}
        </Typography>
        <Typography
          sx={{
            backgroundColor: 'white',
            color: 'black',
            fontWeight: 400,
            fontSize: '12px',
            width: '64px',
            height: '24px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '100px',
          }}
        >
          {status}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
            }}
          />
          <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>
            {role}
          </Typography>
        </Box>
      </Box>

      {hasEdit && (
        <Box
          component='img'
          src={editIcon}
          alt='edit icon'
          sx={{ position: 'absolute', top: 8, right: 8, cursor: 'pointer' }}
        />
      )}
    </Box>
  );
};

export default SessionReviewsItem;
