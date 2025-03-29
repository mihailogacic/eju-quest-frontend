import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Box } from '@mui/material';

type CustomModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const CustomModal = ({ isOpen, onClose, children }: CustomModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  const modalRoot = document.getElementById('modal');
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 5000,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={onClose}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          borderRadius: '12px',
          p: 4,
          width: '100%',
          maxWidth: '620px',
          '@media (max-width: 640px)': {
            px: 2,
          },
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </Box>
    </Box>,
    modalRoot
  );
};

export default CustomModal;
