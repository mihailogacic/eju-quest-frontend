import { Box, TextField, Typography } from '@mui/material';

type TopicContentProps = {
  content: {
    heading: string;
    text: string;
  }[];
  onChange: (sectionIndex: number, text: string) => void;
};

const TopicContent = ({ content, onChange }: TopicContentProps) => {
  return (
    <Box sx={{ mb: 10 }}>
      <Typography
        sx={{
          fontSize: '40px',
          fontWeight: 700,
          textAlign: 'center',
          mb: 1,
          '@media (max-width: 768px)': {
            fontSize: '32px',
          },
        }}
      >
        Review Lesson Sections
      </Typography>
      <Typography sx={{ textAlign: 'center', mb: 5 }}>
        Edit the generated text before saving the lesson.
      </Typography>

      {content.map((section, idx) => (
        <Box key={`${section.heading}-${idx}`} sx={{ mb: 4 }}>
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
          <TextField
            value={section.text}
            onChange={(event) => onChange(idx, event.target.value)}
            multiline
            minRows={4}
            fullWidth
            helperText='Review and edit this section before saving.'
            slotProps={{
              htmlInput: {
                'aria-label': `Section ${idx + 1} content`,
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'white',
                alignItems: 'flex-start',
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default TopicContent;
