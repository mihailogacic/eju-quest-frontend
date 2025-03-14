import { TextField } from '@mui/material';
import { styled } from '@mui/system';

const OutlinedTextArea = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '14px',

    '& fieldset': {
      borderColor: theme.palette.border.cyanGray,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.text.midGray,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.text.midGray,
    },
  },
  '& .MuiInputBase-input': {
    color: theme.palette.text.secondary,
    fontSize: '16px',
    minHeight: '120px',
    maxHeight: '292px',
    overflowY: 'auto',
  },
  '& .MuiInputBase-input::placeholder': {
    color: theme.palette.text.charcoalBlack,
    opacity: 0.4,
  },
}));

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
