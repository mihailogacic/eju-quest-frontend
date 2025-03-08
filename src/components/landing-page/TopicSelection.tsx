import { useState } from 'react';
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { TOPIC_OPTIONS } from '../../constants/topic-options';

const TopicSelection = () => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const handleSelect = (
    _event: React.MouseEvent<HTMLElement>,
    newTopics: string[]
  ) => {
    setSelectedTopics(newTopics);
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={(theme) => ({
          fontSize: '48px',
          color: theme.palette.text.darkBlue,
          fontWeight: 600,

          '@media (max-width: 1080px)': {
            fontSize: '32px',
          },
        })}
      >
        Select Any Topic
      </Typography>

      <Typography
        sx={(theme) => ({
          maxWidth: '684px',
          color: theme.palette.text.slateGray,
          fontSize: '18px',
        })}
      >
        Empower yourself to choose from a diverse range of subjects—from science
        and history to art and technology—to spark your child's curiosity.
      </Typography>

      <ToggleButtonGroup
        value={selectedTopics}
        onChange={handleSelect}
        aria-label='topic selection'
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 4,
          mt: 6,

          '@media (max-width: 1080px)': {
            gap: 3,
            gridTemplateColumns: 'repeat(2, 1fr)',
            width: '100%',
            placeItems: 'center',
          },

          '@media (max-width: 640px)': {
            transform: 'scale(0.9)',
            mt: 3,
            gridTemplateColumns: 'repeat(1, 1fr)',
          },
        }}
      >
        {TOPIC_OPTIONS.map((topic) => (
          <ToggleButton
            key={topic.value}
            value={topic.value}
            disableRipple
            sx={{
              flex: '1 1 calc(50% - 16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '230px',
              minWidth: '230px',
              height: '104px',
              borderRadius: '16px !important',
              bgcolor: selectedTopics.includes(topic.value)
                ? 'grey.300'
                : 'white',
              boxShadow: '0 0 6px hsla(0, 0%, 20%, 0.1)',
              gap: 2.4,
              transition: '300ms ease',
              '&:hover': { bgcolor: 'grey.200' },

              '@media (max-width: 1080px)': {
                maxWidth: '100%',
                minWidth: '100%',
              },

              '@media (max-width: 640px)': {
                height: '100px',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(28, 28, 28, 0.05)',
                width: '64px',
                height: '64px',
                borderRadius: '20px',
              }}
            >
              <Box
                component='img'
                src={topic.icon}
                alt='{`${topic.label} Icon`}'
              />
            </Box>
            <Typography
              sx={(theme) => ({
                color: theme.palette.text.charredBrown,
                fontSize: '24px',
                textTransform: 'capitalize',
              })}
            >
              {topic.label}
            </Typography>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};

export default TopicSelection;
