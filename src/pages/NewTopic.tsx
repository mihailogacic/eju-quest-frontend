import { useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomButton from '../components/common/CustomButton';
import CustomInput from '../components/common/CustomInput';
import CustomTextArea from '../components/common/CustomTextArea';
import { newTopicSchema, NewTopicFormInputs } from '../utils/validation';
import uploadImg from '../assets/icons/upload-image.png';

const NewTopic = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<NewTopicFormInputs>({
    resolver: zodResolver(newTopicSchema),
  });

  const handleAddImage = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setValue('file', file);
    }
  };

  const onSubmit = (data: NewTopicFormInputs) => {
    console.log('Form Submitted:', data);
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        py: 6,
        px: 12,
        '@media (max-width: 768px)': {
          px: 6,
        },
        '@media (max-width: 640px)': {
          px: 2,
        },
      }}
    >
      <Box
        sx={(theme) => ({
          backgroundColor: 'black',
          borderRadius: '24px',
          color: theme.palette.text.silver,
          display: 'flex',
          p: 7,
          alignItems: 'center',
          gap: 12,
          mb: 6,

          '@media (max-width: 1120px)': {
            gap: 6,
          },

          '@media (max-width: 768px)': {
            flexDirection: 'column',
            p: 5,
          },

          '@media (max-width: 640px)': {
            py: 4,
            px: 3,
          },
        })}
      >
        <Box
          onClick={handleAddImage}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px dashed hsla(0, 0%, 93%, 0.4)',
            borderRadius: '16px',
            backgroundColor: 'hsla(0, 0%, 100%, 0.05)',
            width: '472px',
            height: '192px',
            cursor: 'pointer',
            transition: '300ms ease',

            '&:hover': {
              border: '1px dashed hsla(0, 0%, 93%, 0.54)',
              backgroundColor: 'hsla(0, 0%, 100%, 0.08)',
            },

            '@media (max-width: 768px)': {
              width: '100%',
            },
          }}
        >
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              fontSize: '14px',
              fontWeight: 400,
            }}
          >
            <Box component='img' src={uploadImg} alt='upload image icon' />{' '}
            {fileName ? fileName : 'Upload Image'}
          </Typography>
        </Box>

        <input
          type='file'
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept='.jpg, .jpeg, .png, .gif'
          onChange={handleFileChange}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            '@media (max-width: 768px)': {
              width: '100%',
            },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <Typography>Size: 700x430 pixels</Typography>
            <Typography>File Support: .jpg, jpeg, png or .gif</Typography>
          </Box>

          <CustomButton
            sx={{ width: '148px', height: '48px' }}
            onClick={handleAddImage}
          >
            Upload Image
          </CustomButton>
          {errors.file && (
            <Typography sx={{ color: 'red', fontSize: '12px' }}>
              {errors.file.message}
            </Typography>
          )}
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Box>
          <Typography
            sx={(theme) => ({
              color: theme.palette.text.midnightBlue,
              fontWeight: 600,
              fontSize: '24px',
              mb: '6px',
            })}
          >
            Title
          </Typography>
          <CustomInput
            variantType='outlined'
            placeholder='Add Title'
            {...register('title')}
          />
          {errors.title && (
            <Typography sx={{ color: 'red', fontSize: '12px', mt: 1 }}>
              {errors.title.message}
            </Typography>
          )}
        </Box>

        <Box>
          <Typography
            sx={(theme) => ({
              color: theme.palette.text.midnightBlue,
              fontWeight: 600,
              fontSize: '24px',
              mb: '6px',
            })}
          >
            Add Description
          </Typography>
          <CustomTextArea
            placeholder='Add Description'
            {...register('description')}
          />
          {errors.description && (
            <Typography sx={{ color: 'red', fontSize: '12px', mt: 1 }}>
              {errors.description.message}
            </Typography>
          )}
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'end', my: 5 }}>
        <CustomButton
          type='submit'
          sx={{
            backgroundColor: 'black',
            color: 'white',
            width: '160px',
            height: '48px',

            '&:hover': {
              backgroundColor: 'hsl(0, 0%, 8%)',
            },
          }}
        >
          Continue
        </CustomButton>
      </Box>
    </Box>
  );
};

export default NewTopic;
