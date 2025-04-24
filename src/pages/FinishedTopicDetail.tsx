import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress } from '@mui/material';
import ContentReviewHeader from '../components/content-review/ContentReviewHeader';
import { useTopicResults } from '../hooks/lessons-hook';
import CustomModal from '../components/common/CustomModal';
import DeleteTopic from '../components/modals/DeleteTopic';

const FinishedTopicDetail = () => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const { childId } = location.state || {};

  const { data, isPending, isError } = useTopicResults(id!, childId);

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

  return (
    <>
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
            p: 2,
          },
        }}
      >
        <ContentReviewHeader
          image={data.quiz_results.lesson_image}
          title={data.lesson_title}
          //   age_level={data.age_level}
          //   lesson_length={data.lesson_length}
          isFinishedDetail
          isPassed={data.quiz_results.passed}
          score={data.quiz_results.score}
          totalQuestions={data.quiz_results.total_questions}
          correctAnswers={data.quiz_results.correct_answers}
          quizTime={data.quiz_results.remaining_time}
          childName={data.child_username}
          summaryTime={
            data.summary ? data.summary.remaining_time : 'Not done yet'
          }
        />

        <Box
          sx={(theme) => ({
            color: theme.palette.text.charredBrown,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            my: 5,
          })}
        >
          {/* {data.sections.length > 0 ? (
            data.sections.map((section, index) => (
              <Box key={index}>
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  {section.heading}
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                  {section.content}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography sx={{ fontSize: '14px', textAlign: 'center' }}>
              No content available for this lesson.
            </Typography>
          )} */}

          {data?.summary?.description && (
            <Box>
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                Lesson Summary
              </Typography>

              <Box
                sx={{
                  width: '100%',
                  maxWidth: '720px',
                  overflowY: 'auto',
                  maxHeight: '240px',
                  border: '1px solid black',
                  p: 1,
                  borderRadius: '8px',

                  '&::-webkit-scrollbar': {
                    width: '4px',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'hsl(0, 0%, 10%)',
                  },
                  '&::-webkit-scrollbar-track': {
                    backgroundColor: 'hsl(0, 0%, 90%)',
                  },
                }}
              >
                {data?.summary?.description || ''}
              </Box>
            </Box>
          )}

          <Box>
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: 700,
                mb: 1,
              }}
            >
              Quiz Results
            </Typography>

            <Box>
              {data.quiz_results.answers.map((answer, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography sx={{ mb: 0.5 }}>
                    {index + 1}. {answer.question_text}
                  </Typography>
                  <Typography sx={{ fontSize: '14px' }}>
                    Child Answer:{' '}
                    <Typography
                      component='span'
                      sx={{ fontWeight: 600, fontSize: '14px' }}
                    >
                      {answer.options[answer.selected_option]}
                    </Typography>{' '}
                    <Typography
                      component='span'
                      sx={{
                        fontWeight: 600,
                        fontSize: '14px',
                        color: 'white',
                        backgroundColor:
                          answer.correct === 'true'
                            ? 'hsla(120, 100%, 30%, 0.9)'
                            : 'hsla(0, 100%, 45%, 0.9)',
                        border: '1px solid',
                        borderColor:
                          answer.correct === 'true'
                            ? 'hsl(120, 100%, 30%)'
                            : 'hsl(0, 100%, 45%)',
                        borderRadius: '4px',
                        px: 0.5,
                        ml: 0.5,
                      }}
                    >
                      {answer.correct === 'true' ? 'Correct' : 'Incorrect'}
                    </Typography>
                  </Typography>
                  {answer.correct === 'false' && (
                    <Typography sx={{ fontSize: '14px' }}>
                      Correct Answer:{' '}
                      <Typography
                        component='span'
                        sx={{ fontWeight: 600, fontSize: '14px' }}
                      >
                        {
                          answer.options[
                            answer.correct_option as keyof typeof answer.options
                          ]
                        }
                      </Typography>
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      <CustomModal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)}>
        <DeleteTopic
          lessonId={Number(id)}
          onClose={() => setIsDeleteOpen(false)}
        />
      </CustomModal>
    </>
  );
};

export default FinishedTopicDetail;
