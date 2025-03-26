import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 48,
  height: 26,
  padding: 0,
  display: 'flex',

  '& .MuiSwitch-switchBase': {
    padding: 3,
    '&.Mui-checked': {
      transform: 'translateX(22px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#104760',
        opacity: 1,
      },
    },
  },

  '& .MuiSwitch-thumb': {
    width: 20,
    height: 20,
    backgroundColor: '#D9D9D9',
  },

  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#A0A0A0',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 200,
    }),
  },
}));

export default CustomSwitch;
