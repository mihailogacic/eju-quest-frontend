import { Box, Typography } from '@mui/material';
import imagePlaceholder from '../../assets/images/no-image.webp';

type ContentReviewHeaderProps = {
  image: string;
  title: string;
  age_level?: number | string;
  lesson_length?: string;
  isFinishedDetail?: boolean;
  isPassed?: boolean;
  score?: number;
  totalQuestions?: number;
  correctAnswers?: number;
  quizTime?: number;
  childName?: string;
  summaryTime?: number | string;
};

const ContentReviewHeader = ({
  image,
  title,
  age_level,
  lesson_length,
  isFinishedDetail = false,
  isPassed,
  score,
  totalQuestions,
  correctAnswers,
  quizTime,
  childName,
  summaryTime,
}: ContentReviewHeaderProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '16px',
        p: 4,
        gap: 8,
        alignItems: 'center',
        '@media (max-width: 1280px)': {
          flexDirection: 'column',
          alignItems: 'start',
        },
      }}
    >
      <Box
        component='img'
        src={image || imagePlaceholder}
        alt='Content Review Image'
        sx={{
          borderRadius: '12px',
          objectFit: 'cover',
          width: '100%',
          maxWidth: '556px',
          maxHeight: '308px',
          '@media (max-width: 1280px)': {
            maxWidth: '100%',
          },
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '40px',
            '@media (max-width: 768px)': {
              fontSize: '32px',
            },
            '@media (max-width: 640px)': {
              fontSize: '24px',
            },
          }}
        >
          {title}
        </Typography>
        {!isFinishedDetail ? (
          <>
            <Typography>
              Age level:{' '}
              <Typography component='span' sx={{ fontWeight: 700 }}>
                {age_level}
              </Typography>
            </Typography>
            <Typography>
              Lesson length:{' '}
              <Typography component='span' sx={{ fontWeight: 700 }}>
                {lesson_length}
              </Typography>
            </Typography>
          </>
        ) : (
          <>
            <Typography>
              Child:{' '}
              <Typography component='span' sx={{ fontWeight: 700 }}>
                {childName}
              </Typography>
            </Typography>
            <Typography>
              Quiz Score:{' '}
              <Typography component='span' sx={{ fontWeight: 700 }}>
                {correctAnswers}/{totalQuestions} ({score}%)
              </Typography>
            </Typography>

            <Typography
              component='span'
              sx={{
                fontWeight: 700,
                border: '1px solid green',
                backgroundColor: 'hsla(120, 100%, 30%, 0.25)',
                color: 'white',
                py: 0.8,
                borderRadius: '6px',
                fontSize: '14px',
                textAlign: 'center',
              }}
            >
              {isPassed ? 'PASSED' : 'FAILED'}
            </Typography>

            <Typography>
              Quiz Time:{' '}
              <Typography component='span' sx={{ fontWeight: 700 }}>
                {quizTime === 0
                  ? 'Expired'
                  : `${Math.floor((quizTime || 0) / 60)}m ${
                      (quizTime || 0) % 60
                    }s`}
              </Typography>
            </Typography>
            <Typography>
              Lesson Summary Time:{' '}
              <Typography component='span' sx={{ fontWeight: 700 }}>
                {summaryTime === 'Not done yet'
                  ? 'Not done yet'
                  : summaryTime === 0
                  ? 'Expired'
                  : `${Math.floor((Number(summaryTime) || 0) / 60)}m ${
                      Number(summaryTime) % 60
                    }s`}
              </Typography>
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ContentReviewHeader;
