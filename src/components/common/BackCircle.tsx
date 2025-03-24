import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material';
import backIcon from '../../assets/icons/back.png';
import whiteLeftArrowIcon from '../../assets/icons/white-left-arrow.png';

type BackCircleProps = {
  redirect: string | number;
  sx?: SxProps<Theme>;
  isBlackArrow?: boolean;
};

const BackCircle = ({
  redirect,
  sx = {},
  isBlackArrow = true,
}: BackCircleProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (typeof redirect === 'string') {
      navigate(redirect);
    } else {
      navigate(redirect);
    }
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        backgroundColor: isBlackArrow ? 'white' : 'black',
        borderRadius: '50%',
        position: 'absolute',
        top: 25,
        left: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: '12px',
        cursor: 'pointer',
        width: '48px',
        height: '48px',
        ...sx,
      }}
    >
      <Box
        component='img'
        src={isBlackArrow ? backIcon : whiteLeftArrowIcon}
        alt='back icon'
      />
    </Box>
  );
};

export default BackCircle;
