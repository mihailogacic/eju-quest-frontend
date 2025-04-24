import { Box, Typography } from '@mui/material';
import CustomButton from '../common/CustomButton';
import { useDeleteLesson } from '../../hooks/lessons-hook';

type DeleteTopicProps = {
  lessonId: number;
  onClose: () => void;
};

const DeleteTopic = ({ lessonId, onClose }: DeleteTopicProps) => {
  const { mutate: deleteLesson, isPending } = useDeleteLesson();

  return (
    <Box>
      <Typography>Are you sure you want to delete this topic?</Typography>
      <Box sx={{ display: 'flex', gap: 1, mt: 2, justifyContent: 'end' }}>
        <CustomButton
          onClick={onClose}
          sx={{
            fontSize: '14px',
            border: '1px solid black',
            width: '100%',
            maxWidth: '140px',
            '@media (max-width: 640px)': {
              maxWidth: '100%',
            },
          }}
        >
          Cancel
        </CustomButton>
        <CustomButton
          buttonType='text'
          onClick={() => deleteLesson(lessonId)}
          disabled={isPending}
          sx={{
            fontSize: '14px',
            backgroundColor: 'black',
            width: '100%',
            maxWidth: '140px',
            '@media (max-width: 640px)': {
              maxWidth: '100%',
            },
            '&:disabled': {
              color: 'white',
              opacity: 0.8,
            },
          }}
        >
          {isPending ? 'Deleting...' : "Yes, I'm sure"}
        </CustomButton>
      </Box>
    </Box>
  );
};

export default DeleteTopic;
