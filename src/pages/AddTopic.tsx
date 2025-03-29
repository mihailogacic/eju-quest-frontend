import { useState } from 'react';
import { Box } from '@mui/material';
import TopicHeader from '../components/add-topic/TopicHeader';
import Choices from '../components/add-topic/Choices';
import TopicContent from '../components/add-topic/TopicContent';
import { LessonQuestion } from '../types/lessons-types';

const AddTopic = () => {
  const [isGenerated, setIsGenerated] = useState(false);
  const [generatedQuestions, setGeneratedQuestions] = useState<
    LessonQuestion[]
  >([]);

  const [generatedContent, setGeneratedContent] = useState<
    { heading: string; text: string }[]
  >([]);

  const [lessonInfo, setLessonInfo] = useState({
    title: '',
    age_level: 0,
    lesson_length: '' as 'short' | 'medium' | 'long',
  });

  const [clearTrigger, setClearTrigger] = useState(0);

  const handleClearAll = () => {
    setLessonInfo({
      title: '',
      age_level: 0,
      lesson_length: 'short',
    });
    setGeneratedQuestions([]);
    setIsGenerated(false);
    setClearTrigger((prev) => prev + 1);
  };

  return (
    <Box>
      <TopicHeader
        onGenerate={(res) => {
          setGeneratedQuestions(res.lesson.questions);
          setGeneratedContent(res.lesson.content);
          setLessonInfo({
            title: res.prompt_input.title,
            age_level: res.prompt_input.age_level,
            lesson_length: res.prompt_input.lesson_length,
          });
          setIsGenerated(true);
        }}
        onFormChange={(data) => {
          setLessonInfo({
            title: data.topic_name,
            age_level: Number(data.age_level),
            lesson_length: data.lesson_length as 'short' | 'medium' | 'long',
          });
        }}
        clearTrigger={clearTrigger}
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
        {isGenerated && generatedContent.length > 0 && (
          <TopicContent content={generatedContent} />
        )}

        <Choices
          questions={generatedQuestions}
          lessonInfo={lessonInfo}
          isGenerated={isGenerated}
          onClearAll={handleClearAll}
        />
      </Box>
    </Box>
  );
};

export default AddTopic;
