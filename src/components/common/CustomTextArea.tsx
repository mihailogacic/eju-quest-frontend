import { TextField } from '@mui/material';
import { styled } from '@mui/system';

const OutlinedTextArea = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'hsla(0, 0%, 100%, 0.2)',
    borderRadius: '8px',
    padding: '14px',

    '& fieldset': {
      borderColor: 'hsla(0, 0%, 0% 0.1)',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
  },
  '& .MuiInputBase-input': {
    color: 'white',
    fontSize: '16px',
    minHeight: '120px',
    maxHeight: '282px',
    overflowY: 'auto',
  },
  '& .MuiInputBase-input::placeholder': {
    color: 'hsla(0, 0%, 100%, 0.5)',
  },
});

const CustomTextArea = ({ ...props }) => {
  return (
    <OutlinedTextArea
      {...props}
      variant='outlined'
      fullWidth
      multiline
      minRows={4}
    />
  );
};

export default CustomTextArea;
