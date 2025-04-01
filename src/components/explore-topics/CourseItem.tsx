import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

type CourseItemProps = {
  id: number | string;
  image: string;
  name: string;
  description: string;
};

const CourseItem = ({ id, image, name, description }: CourseItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/lesson/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Box
      onClick={handleClick}
      sx={{
        width: '280px',
        borderRadius: '8px',
        border: '1px solid hsla(0, 0%, 0%, 0.1)',
        cursor: 'pointer',

        '@media (max-width: 640px)': {
          width: '100%',
        },
      }}
    >
      <Box
        component='img'
        src={image}
        alt='course image'
        sx={{
          height: '282px',
          objectFit: 'cover',
          width: '100%',
          display: 'block',
          borderRadius: '8px 8px 0 0',
        }}
      />
      <Box
        sx={{
          color: 'white',
          backgroundColor: 'black',
          py: 1,
          px: 2,
          borderRadius: '0 0 8px 8px',
        }}
      >
        <Typography sx={{ fontSize: '24px', fontWeight: 600, mb: '4px' }}>
          {name}
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            color: 'hsla(0, 0%, 100%, 0.8)',
            fontSize: '16px',
            lineHeight: 1.3,
            mb: '6px',
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default CourseItem;
