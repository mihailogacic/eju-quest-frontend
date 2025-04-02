import { useEffect, useState, useRef } from 'react';
import { Box, Typography } from '@mui/material';

interface TimeoutProps {
  duration: number;
  onTimeout?: () => void;
}

const Timeout = ({ duration, onTimeout }: TimeoutProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const hasFired = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0 && !hasFired.current) {
      hasFired.current = true;
      onTimeout?.();
    }
  }, [timeLeft, onTimeout]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.text.lightGreen,
        display: 'flex',
        justifyContent: 'center',
        py: '12px',
      })}
    >
      <Typography
        sx={{ fontSize: '18px', fontWeight: 700, textAlign: 'center' }}
      >
        Timeout: {formatTime(timeLeft)}
      </Typography>
    </Box>
  );
};

export default Timeout;
