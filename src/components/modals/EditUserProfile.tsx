import { Box, Typography, CircularProgress } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import { useUserProfile, useUpdateUserProfile } from '../../hooks/auth-hook';
import profilePlaceholder from '../../assets/images/profile-placeholder.jpg';
import {
  updateProfileSchema,
  UpdateProfileInputs,
} from '../../utils/validation';
import editIcon from '../../assets/icons/edit-icon.png';

const inputStyle = {
  backgroundColor: 'white',
  border: '1px solid hsla(0, 0%, 0%, 0.1)',
  '& .MuiInputBase-input': {
    color: 'black',
  },
  mt: '2px',
};

const EditUserProfile = () => {
  const { data, isPending: loadingData } = useUserProfile();
  const { mutate, isPending } = useUpdateUserProfile();

  const [profileImage, setProfileImage] = useState<string>(profilePlaceholder);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UpdateProfileInputs>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      profile_image: null,
    },
  });

  useEffect(() => {
    if (data) {
      setValue('first_name', data.first_name);
      setValue('last_name', data.last_name);
      setValue('email', data.email);
      setProfileImage(data.profile_image || profilePlaceholder);
    }
  }, [data, setValue]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          const base64 = reader.result.toString();
          setProfileImage(base64);
        }
      };
      reader.readAsDataURL(file);
      setValue('profile_image', file);
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const onSubmit = (formData: UpdateProfileInputs) => {
    mutate(formData);
  };

  if (loadingData) {
    return (
      <Box display='flex' justifyContent='center' py={2}>
        <CircularProgress size={24} />
      </Box>
    );
  }

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        px: 1,

        '@media (max-width: 640px)': {
          px: 0,
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100px',
          height: '100px',
          mx: 'auto',
          mb: '-8px',

          '@media (max-width: 640px)': {
            width: '90px',
            height: '90px',
          },
        }}
      >
        <Box
          component='img'
          src={profileImage}
          alt='profile picture'
          sx={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid hsla(0, 0%, 0%, 0.75)',

            '@media (max-width: 640px)': {
              width: '90px',
              height: '90px',
            },
          }}
        />
        <input
          type='file'
          accept='image/*'
          onChange={handleImageChange}
          id='profile-upload'
          style={{ display: 'none' }}
        />
        <label htmlFor='profile-upload'>
          <Box
            component='img'
            src={editIcon}
            alt='Edit Icon'
            sx={{
              position: 'absolute',
              right: -10,
              top: 10,
              cursor: 'pointer',

              '@media (max-width: 640px)': {
                width: '28px',
                height: '28px',
              },
            }}
          />
        </label>
      </Box>

      <Box>
        <Typography
          component='label'
          sx={{ fontSize: '14px', fontWeight: 500 }}
        >
          First Name
        </Typography>
        <CustomInput
          {...register('first_name')}
          autoComplete='off'
          sx={inputStyle}
        />
        {errors.first_name && (
          <Typography sx={{ color: 'red', fontSize: '12px' }}>
            {errors.first_name.message}
          </Typography>
        )}
      </Box>

      <Box>
        <Typography
          component='label'
          sx={{ fontSize: '14px', fontWeight: 500 }}
        >
          Last Name
        </Typography>
        <CustomInput
          {...register('last_name')}
          autoComplete='off'
          sx={inputStyle}
        />
        {errors.last_name && (
          <Typography sx={{ color: 'red', fontSize: '12px' }}>
            {errors.last_name.message}
          </Typography>
        )}
      </Box>

      <Box>
        <Typography
          component='label'
          sx={{ fontSize: '14px', fontWeight: 500 }}
        >
          Email
        </Typography>
        <CustomInput
          type='email'
          {...register('email')}
          autoComplete='off'
          sx={inputStyle}
        />
        {errors.email && (
          <Typography sx={{ color: 'red', fontSize: '12px' }}>
            {errors.email.message}
          </Typography>
        )}
      </Box>

      <Typography sx={{ fontSize: '12px', color: 'hsla(0, 0%, 0%, 0.5)' }}>
        Created at:{' '}
        {data?.created_at
          ? new Date(data.created_at).toLocaleDateString('en-GB')
          : 'NaN'}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <CustomButton
          type='submit'
          disabled={isPending}
          buttonType='text'
          sx={{
            backgroundColor: 'black',
            '&:disabled': {
              color: 'white',
              opacity: 0.8,
            },
            '@media (max-width: 640px)': {
              fontSize: '14px',
            },
          }}
        >
          {isPending ? 'Updating...' : 'Update Profile'}
        </CustomButton>
      </Box>
    </Box>
  );
};

export default EditUserProfile;
