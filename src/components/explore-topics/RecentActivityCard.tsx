import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import imagePlaceholder from '../../assets/images/no-image.webp';

type RecentActivityCardProps = {
  // profile_picture: string;
  // first_name: string;
  // last_name: string;
  image: string;
  title: string;
  // hashtags: string[];
  id: number | string;
};

const RecentActivityCard = ({
  // profile_picture,
  // first_name,
  // last_name,
  image,
  title,
  // hashtags,
  id,
}: RecentActivityCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/lesson/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        backgroundColor: 'white',
        borderRadius: '6px',
        color: 'black',
        width: '100%',
        maxWidth: '588px',
        border: '1px solid white',
        cursor: 'pointer',
      }}
    >
      {/* <Box
        sx={{
          py: 1,
          px: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            component='img'
            src={profile_picture}
            alt={`${first_name} ${last_name} Profile Picture`}
            sx={{ width: '32px', height: '32px', objectFit: 'cover' }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 500, mb: '-4px' }}>
              {first_name} {last_name}
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: '12px',
                color: 'hsla(0, 0%, 0%, 0.5)',
              }}
            >
              2h ago - Online
            </Typography>
          </Box>
        </Box>

        <IconButton disableRipple>
          <MoreHorizIcon sx={{ color: 'black', fontSize: '22px' }} />
        </IconButton>
      </Box> */}

      <Box
        component='img'
        src={image || imagePlaceholder}
        alt='Activity Image'
        sx={{
          width: '100%',
          height: '294px',
          objectFit: 'cover',
          borderTopLeftRadius: '6px',
          borderTopRightRadius: '6px',
        }}
      />

      <Box
        sx={{
          // py: 1,
          py: 1.4,
          px: '12px',
          // mb: '12px'
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: 400,
            // mb: '4px',
          }}
        >
          {title}
        </Typography>

        {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {hashtags.map((hashtag, index) => (
            <Typography
              key={index}
              sx={(theme) => ({
                backgroundColor: theme.palette.text.slateBlack,
                color: 'white',
                display: 'inline-block',
                borderRadius: '98px',
                p: '3px 15px',
                fontSize: '12px',
              })}
            >
              #{hashtag}
            </Typography>
          ))}
        </Box> */}
      </Box>
    </Box>
  );
};

export default RecentActivityCard;
