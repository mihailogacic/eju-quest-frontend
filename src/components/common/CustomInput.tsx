import { useState } from 'react';
import {
  Box,
  TextField,
  TextFieldProps,
  Typography,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from '@mui/system';

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.text.softGray,
  borderRadius: '8px',

  '& .MuiOutlinedInput-root': {
    backgroundColor: '#1C1C1C',
    padding: '24px 14px 10px',
    '& fieldset': {
      border: 'none',
    },
  },
  '& .MuiInputBase-input': {
    color: 'white',
    fontSize: '16px',
    padding: '12px 0px 4px 0px',
  },
  '& .MuiInputBase-input::placeholder': {
    color: theme.palette.text.darkGray,
    opacity: 1,
  },
}));

type CustomInputProps = TextFieldProps & {
  label: string;
};

const CustomInput = ({ label, type, ...props }: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Typography
        sx={(theme) => ({
          position: 'absolute',
          top: '12px',
          left: '14px',
          color: theme.palette.text.darkGray,
          fontSize: '12px',
          textTransform: 'uppercase',
          pointerEvents: 'none',
          zIndex: 10,
        })}
      >
        {label}
      </Typography>
      <StyledTextField
        {...props}
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        variant='outlined'
        fullWidth
        slotProps={{
          input: {
            endAdornment:
              type === 'password' ? (
                <InputAdornment position='end'>
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge='end'
                    sx={{ color: '#8D8D8D', mb: 1, mr: 0 }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ) : null,
          },
        }}
      />
    </Box>
  );
};

export default CustomInput;
