import { useState } from 'react';
import { Box } from '@mui/material';
import TopicHeader from '../components/add-topic/TopicHeader';
import Choices from '../components/add-topic/Choices';
import { LessonQuestion } from '../types/lessons-types';

const AddTopic = () => {
  const [generatedQuestions, setGeneratedQuestions] = useState<
    LessonQuestion[]
  >([]);
  const [lessonInfo, setLessonInfo] = useState({
    title: '',
    age_level: 0,
    lesson_length: 'short' as 'short' | 'medium' | 'long',
  });

  return (
    <Box>
      <TopicHeader
        onGenerate={(res) => {
          setGeneratedQuestions(res.lesson.questions);
        }}
        onFormChange={(data) => {
          setLessonInfo({
            title: data.topic_name,
            age_level: Number(data.age_level),
            lesson_length: data.lesson_length as 'short' | 'medium' | 'long',
          });
        }}
      />
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
        <Choices questions={generatedQuestions} lessonInfo={lessonInfo} />
      </Box>
    </Box>
  );
};

export default AddTopic;
