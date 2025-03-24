import { Box, Typography } from '@mui/material';
import CustomTextArea from '../components/common/CustomTextArea';
import CustomButton from '../components/common/CustomButton';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { lessonSummarySchema, LessonSummaryInputs } from '../utils/validation';

const LessonSummary = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LessonSummaryInputs>({
    resolver: zodResolver(lessonSummarySchema),
  });

  const handleCancel = () => {
    console.log('cancel');
  };

  const onSubmit = (data: LessonSummaryInputs) => {
    console.log('Form submitted:', data);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        borderTop: '1px solid white',
        borderBottom: '1px solid white',
        minHeight: 'calc(100vh - 208px)',

        '@media (max-width: 640px)': {
          minHeight: 'calc(100vh - 180px)',
        },
      }}
    >
      <Typography
        sx={{
          fontSize: '40px',
          fontWeight: 700,
          textAlign: 'center',
          mt: 6,
          mb: 2,
          '@media (max-width: 768px)': {
            fontSize: '32px',
          },
        }}
      >
        Lesson Summary
      </Typography>

      <Typography
        sx={{ fontWeight: 400, fontSize: '16px', textAlign: 'center' }}
      >
        Submit a text input summarizing what you learned.
      </Typography>

      <Box
        sx={{ maxWidth: '700px', width: '100%', mx: 'auto', mt: 6, px: 2 }}
        component='form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography sx={{ fontSize: '20px', fontWeight: 500, mb: 2 }}>
          Topic Name
        </Typography>
        <CustomTextArea
          placeholder='Enter your summary here'
          {...register('summary')}
        />
        {errors.summary && (
          <Typography sx={{ color: 'red', fontSize: '12px', mt: 1 }}>
            {errors.summary.message}
          </Typography>
        )}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            mt: 4,
            mb: 6,
            gap: 2,
            '@media (max-width: 640px)': {
              justifyContent: 'center',
            },
            '@media (max-width: 440px)': {
              gap: 1,
            },
          }}
        >
          <CustomButton
            buttonType='text'
            onClick={handleCancel}
            sx={{
              border: '1px solid white',
              width: '100%',
              maxWidth: '134px',
              '@media (max-width: 640px)': { maxWidth: '100%' },
            }}
          >
            Cancel
          </CustomButton>
          <CustomButton
            type='submit'
            sx={{
              width: '100%',
              maxWidth: '134px',
              '@media (max-width: 640px)': { maxWidth: '100%' },
            }}
          >
            Submit
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default LessonSummary;
