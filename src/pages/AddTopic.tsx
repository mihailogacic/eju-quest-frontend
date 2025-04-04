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

  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const [generatedContent, setGeneratedContent] = useState<
    { heading: string; text: string }[]
  >([]);

  const [lessonInfo, setLessonInfo] = useState({
    title: '',
    age_level: 0,
    lesson_length: '' as 'short' | 'medium' | 'long',
  });

  console.log('AddTopic (lessonInfo): ', lessonInfo);

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
          setGeneratedQuestions(res.questions);
          setGeneratedContent(res.content);
          setLessonInfo((prev) => ({
            ...prev,
          }));
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
        onImageChange={(file) => setUploadedImage(file)}
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
          image={uploadedImage}
          content={generatedContent}
        />
      </Box>
    </Box>
  );
};

export default AddTopic;
