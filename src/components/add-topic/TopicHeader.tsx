import { Box, Typography } from '@mui/material';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { topicDetailsSchema, TopicDetailsInputs } from '../../utils/validation';

const TopicHeader = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TopicDetailsInputs>({
    resolver: zodResolver(topicDetailsSchema),
  });

  const onSubmit = (data: TopicDetailsInputs) => {
    console.log('Form submitted:', data);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        borderTop: '1px solid white',
        py: 8,
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: '40px' }}>
          Add Topic Details
        </Typography>
        <Typography>Enter the required information</Typography>
      </Box>

      <Box
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: '100%',
          maxWidth: '536px',
          mx: 'auto',
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography
            component='label'
            sx={{ fontSize: '14px', fontWeight: 500 }}
          >
            Topic Name
          </Typography>
          <CustomInput
            placeholder='Enter Topic Name'
            {...register('topic_name')}
            sx={{
              backgroundColor: 'hsla(0, 0%, 100%, 0.1)',
              '& .MuiInputBase-input::placeholder': {
                color: 'hsla(0, 0%, 100%, 0.5)',
              },
            }}
          />
          {errors.topic_name && (
            <Typography sx={{ color: 'red', fontSize: '12px' }}>
              {errors.topic_name.message}
            </Typography>
          )}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography
            component='label'
            sx={{ fontSize: '14px', fontWeight: 500 }}
          >
            Age Level
          </Typography>
          <CustomInput
            placeholder='Select Age Level'
            {...register('age_level')}
            sx={{
              backgroundColor: 'hsla(0, 0%, 100%, 0.1)',
              '& .MuiInputBase-input::placeholder': {
                color: 'hsla(0, 0%, 100%, 0.5)',
              },
            }}
          />
          {errors.age_level && (
            <Typography sx={{ color: 'red', fontSize: '12px' }}>
              {errors.age_level.message}
            </Typography>
          )}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography
            component='label'
            sx={{ fontSize: '14px', fontWeight: 500 }}
          >
            Desired Lesson Length
          </Typography>
          <CustomInput
            placeholder='Enter Lesson Length'
            {...register('lesson_length')}
            sx={{
              backgroundColor: 'hsla(0, 0%, 100%, 0.1)',
              '& .MuiInputBase-input::placeholder': {
                color: 'hsla(0, 0%, 100%, 0.5)',
              },
            }}
          />
          {errors.lesson_length && (
            <Typography sx={{ color: 'red', fontSize: '12px' }}>
              {errors.lesson_length.message}
            </Typography>
          )}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <CustomButton
            type='submit'
            sx={{
              maxWidth: '220px',
              width: '100%',
              '@media (max-width: 640px)': {
                maxWidth: '100%',
              },
            }}
          >
            Generate Content
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default TopicHeader;
