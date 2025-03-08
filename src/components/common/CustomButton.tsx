import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface CustomButtonProps extends ButtonProps {
  buttonType?: 'default' | 'text';
}

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'buttonType',
})<CustomButtonProps>(({ buttonType }) => ({
  borderRadius: '220px',
  textTransform: 'none',
  fontSize: '16px',
  padding: '8px 20px',
  fontWeight: 400,
  transition: '0.3s',
  cursor: 'pointer',

  ...(buttonType === 'default' && {
    backgroundColor: '#fff',
    color: '#000',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  }),
  ...(buttonType === 'text' && {
    backgroundColor: 'transparent',
    color: '#fff',
  }),
}));

const CustomButton: React.FC<CustomButtonProps> = ({
  buttonType = 'default',
  children,
  onClick,
  sx,
  ...props
}) => {
  return (
    <StyledButton
      buttonType={buttonType}
      onClick={onClick}
      sx={{ ...sx }}
      {...props}
      disableRipple={buttonType === 'text'}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
