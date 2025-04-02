import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import CustomButton from '../common/CustomButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

type QuizFinishedProps = {
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  passed: boolean;
};

const QuizFinished = ({
  score,
  correctAnswers,
  totalQuestions,
  passed,
}: QuizFinishedProps) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: 'center', padding: '20px' }}>
      <Box>
        {passed ? (
          <CheckCircleIcon sx={{ color: 'black', fontSize: 60 }} />
        ) : (
          <CancelIcon sx={{ color: 'black', fontSize: 60 }} />
        )}
      </Box>
      <Typography
        sx={{ fontSize: '24px', fontWeight: 'bold', mb: 1, lineHeight: 1.2 }}
      >
        {passed ? 'You passed the quiz!' : "Unfortunately, you didn't pass."}
      </Typography>

      <Typography>
        You scored{' '}
        <Typography component='span' sx={{ fontWeight: 'bold' }}>
          {score}%
        </Typography>
      </Typography>
      <Typography>
        Correct Answers: {correctAnswers}/{totalQuestions}
      </Typography>
      <CustomButton
        buttonType='text'
        sx={{ backgroundColor: 'black', mt: 3 }}
        onClick={() => navigate('/explore-topics')}
      >
        Go to Home
      </CustomButton>
    </Box>
  );
};

export default QuizFinished;
