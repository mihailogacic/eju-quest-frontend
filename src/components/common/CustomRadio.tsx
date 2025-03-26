import { Radio } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomRadio = styled(Radio)(({ theme }) => ({
  color: 'white',
  padding: '4px',
  '&.Mui-checked': {
    color: theme.palette.text.lightGreen,
  },
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

export default CustomRadio;
