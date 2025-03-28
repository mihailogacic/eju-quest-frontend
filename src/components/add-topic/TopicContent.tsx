import { Box, Typography } from '@mui/material';

type TopicContentProps = {
  content: {
    heading: string;
    text: string;
  }[];
};

const TopicContent = ({ content }: TopicContentProps) => {
  return (
    <Box sx={{ mb: 10 }}>
      {content.map((section, idx) => (
        <Box key={idx} sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontWeight: 'bold',
              mb: 1,
              fontSize: '24px',
              lineHeight: 1.3,
            }}
          >
            {section.heading}
          </Typography>
          <Typography>{section.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default TopicContent;
