import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import backIcon from '../../assets/icons/back.png';

type BackCircleProps = {
  redirect: string | number;
};

const BackCircle = ({ redirect }: BackCircleProps) => {
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
        backgroundColor: 'white',
        borderRadius: '50%',
        position: 'absolute',
        top: 25,
        left: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: '12px',
        cursor: 'pointer',
      }}
    >
      <Box component='img' src={backIcon} alt='back icon' />
    </Box>
  );
};

export default BackCircle;
