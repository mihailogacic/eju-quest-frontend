import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Typography,
  CircularProgress,
} from '@mui/material';
import CustomRadio from '../components/common/CustomRadio';
import CustomButton from '../components/common/CustomButton';
import CustomAccordion from '../components/common/CustomAccordion';
import CustomModal from '../components/common/CustomModal';
import QuizFinished from '../components/quiz/QuizFinished';
import Timeout from '../components/quiz/Timeout';
import { useLessonQuiz, useSubmitQuiz } from '../hooks/lessons-hook';

const Quiz = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quizResult, setQuizResult] = useState<null | {
    score: number;
    correct_answers: number;
    total_questions: number;
    passed: boolean;
  }>(null);

  // const [selected, setSelected] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(300);
  const { mutate: submitQuiz } = useSubmitQuiz();

  const { id } = useParams();
  const { data, isPending, isError } = useLessonQuiz(id as string);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const optionId = Number(event.target.value);
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  if (isPending)
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 6,
        }}
      >
        <CircularProgress />
      </Box>
    );
  if (isError || !data) return <Typography>Error loading data</Typography>;

  const questions = data.questions;

  const currentQuestion = questions[currentQuestionIndex];
  // const selectedAnswer = answers[currentQuestion.id] ?? '';

  const handleSubmit = () => {
    const payload = {
      lesson_id: Number(id),
      answers: questions.map((q) => ({
        question_id: q.id,
        selected_option:
          q.options.find((opt) => opt.id === answers[q.id])?.option ?? '',
      })),
      remaining_time: timeLeft,
    };

    submitQuiz(payload, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onSuccess: (result: any) => {
        setQuizResult({
          score: result.score,
          correct_answers: result.correct_answers,
          total_questions: result.total_questions,
          passed: result.passed,
        });
        setIsModalOpen(true);
      },
    });
  };

  const handleAutoSubmit = () => {
    const filledAnswers = questions.reduce((acc, q) => {
      const selectedId = answers[q.id];
      const selectedOption = q.options.find((opt) => opt.id === selectedId);

      acc[q.id] = selectedOption?.option ? selectedOption.option : 'Z';

      return acc;
    }, {} as Record<number, string>);

    const payload = {
      lesson_id: Number(id),
      answers: questions.map((q) => ({
        question_id: q.id,
        selected_option: filledAnswers[q.id],
      })),
      remaining_time: timeLeft,
    };

    submitQuiz(payload, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onSuccess: (result: any) => {
        setQuizResult({
          score: result.score,
          correct_answers: result.correct_answers,
          total_questions: result.total_questions,
          passed: result.passed,
        });
        setIsModalOpen(true);
      },
    });
  };

  return (
    <>
      <Box
        sx={{
          minHeight: 'calc(100vh - 104px)',
          backgroundColor: 'black',
          color: 'white',
          borderTop: '1px solid white',
          px: 12,
          py: 8,
          display: 'flex',
          gap: 8,
          justifyContent: 'space-between',

          '@media (max-width: 1280px)': {
            px: 8,
            py: 6,
          },
          '@media (max-width: 900px)': {
            flexDirection: 'column',
          },
          '@media (max-width: 768px)': {
            px: 6,
            py: 5,
          },
          '@media (max-width: 640px)': {
            minHeight: 'calc(100vh - 90px)',
            px: 2,
          },
        }}
      >
        <Box
          sx={{
            width: '60%',
            '@media (max-width: 900px)': {
              width: '100%',
            },
          }}
        >
          <Typography
            sx={(theme) => ({
              color: theme.palette.text.lightSlate,
              fontSize: '38px',
              fontWeight: 600,
              lineHeight: 1.2,
              '@media (max-width: 768px)': {
                fontSize: '30px',
              },
            })}
          >
            Course: {data.lesson_detail?.title || 'undefined'}
          </Typography>

          <Box component='hr' sx={{ opacity: 0.3, m: '24px 0 32px 0' }} />

          <Box
            sx={{
              width: '100%',
              border: '1px solid hsla(0, 0%, 100%, 0.3)',
              borderRadius: '8px',
            }}
          >
            <Box
              sx={{
                p: '24px 32px',
                backgroundColor: 'white',
                color: 'black',
                alignItems: 'center',
                borderRadius: '8px 8px 0 0',
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: '24px' }}>
                Question {currentQuestionIndex + 1}
              </Typography>
            </Box>

            <Box sx={{ p: '24px 32px' }}>
              <Typography>{currentQuestion.question_text}</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: '100%',
              border: '1px solid hsla(0, 0%, 100%, 0.3)',
              borderRadius: '8px',
              mt: 5,
            }}
          >
            <FormControl sx={{ p: '24px 32px' }}>
              <RadioGroup
                name={`quiz-options-${currentQuestion.id}`}
                value={answers[currentQuestion.id] ?? ''}
                onChange={handleChange}
              >
                {currentQuestion.options.map((option) => (
                  <FormControlLabel
                    key={option.id}
                    value={option.id}
                    control={<CustomRadio />}
                    label={
                      <Typography sx={{ color: 'white', fontSize: '16px' }}>
                        {option.option_text}
                      </Typography>
                    }
                    sx={{
                      alignItems: 'center',
                      gap: '4px',
                      mb: 1,
                    }}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>

          <Box
            sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 3 }}
          >
            <CustomButton
              buttonType='text'
              onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
              disabled={currentQuestionIndex <= 0}
              sx={{
                width: '100%',
                maxWidth: '180px',
                border: '1px solid white',

                '&:disabled': {
                  color: 'white',
                  opacity: 0.8,
                },
              }}
            >
              Previous
            </CustomButton>

            {currentQuestionIndex < questions.length - 1 ? (
              <CustomButton
                onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                disabled={!answers[currentQuestion.id]}
                sx={{ width: '100%', maxWidth: '180px' }}
              >
                Next
              </CustomButton>
            ) : (
              <CustomButton
                onClick={handleSubmit}
                disabled={!answers[currentQuestion.id]}
                sx={{ width: '100%', maxWidth: '180px' }}
              >
                Submit
              </CustomButton>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            width: '40%',
            '@media (max-width: 900px)': {
              width: '100%',
            },
          }}
        >
          <Typography
            sx={(theme) => ({
              color: theme.palette.text.lightSlate,
              fontSize: '38px',
              fontWeight: 600,
              lineHeight: 1.2,
              '@media (max-width: 768px)': {
                fontSize: '30px',
              },
            })}
          >
            Completed Questions
          </Typography>

          <Box
            sx={{
              maxWidth: '400px',
              mt: 3,
              '@media (max-width: 900px)': {
                maxWidth: '100%',
              },
            }}
          >
            {questions.map((question, index) => {
              const selectedOptionId = answers[question.id];
              const selectedOption = question.options.find(
                (opt) => opt.id === selectedOptionId
              );

              return (
                <CustomAccordion
                  key={question.id}
                  title={`Question ${index + 1}`}
                >
                  <Typography sx={{ mb: 1 }}>
                    {question.question_text}
                  </Typography>
                  <Typography sx={{ fontWeight: 500 }}>
                    Your Answer:{' '}
                    {selectedOption
                      ? selectedOption.option_text
                      : 'No answer yet.'}
                  </Typography>
                </CustomAccordion>
              );
            })}
          </Box>
        </Box>
      </Box>

      {/* TODO: the parent should set the quiz duration (need to change) */}
      <Timeout
        onTimeout={handleAutoSubmit}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
      />

      <CustomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        overlayClose={false}
      >
        {quizResult && (
          <QuizFinished
            score={quizResult.score}
            correctAnswers={quizResult.correct_answers}
            totalQuestions={quizResult.total_questions}
            passed={quizResult.passed}
          />
        )}
      </CustomModal>
    </>
  );
};

export default Quiz;
