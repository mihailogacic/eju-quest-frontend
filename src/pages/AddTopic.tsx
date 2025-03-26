import { Box } from '@mui/material';
import TopicHeader from '../components/add-topic/TopicHeader';
import Choices from '../components/add-topic/Choices';

const AddTopic = () => {
  return (
    <Box>
      <TopicHeader />
      <Box
        sx={{
          px: 12,
          py: 8,
          '@media (max-width: 1280px)': {
            px: 8,
            py: 6,
          },
          '@media (max-width: 768px)': {
            px: 6,
            py: 5,
          },
          '@media (max-width: 640px)': {
            px: 2,
            py: 4,
          },
        }}
      >
        <Choices />
      </Box>
    </Box>
  );
};

export default AddTopic;
