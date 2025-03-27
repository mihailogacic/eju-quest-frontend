import { useForm } from 'react-hook-form';
import { Box, Typography } from '@mui/material';
import CustomInput from '../components/common/CustomInput';
import BottomMaskImg from '../assets/images/bottom-mask.png';
import CustomButton from '../components/common/CustomButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { addChildrenSchema, AddChildrenFormInputs } from '../utils/validation';
import BackCircle from '../components/common/BackCircle';
import { useAddChild } from '../hooks/users-hook';
import chevronRightIcon from '../assets/icons/chevron-right.png';

const AddChildren = () => {
  const { mutate: addChild, isPending } = useAddChild();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddChildrenFormInputs>({
    resolver: zodResolver(addChildrenSchema),
  });

  const onSubmit = (data: AddChildrenFormInputs) => {
    addChild({ ...data, role: 'child' });
  };

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
        py: 6,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(89, 89, 89, 0.2)',
          border: '2px solid rgba(141, 141, 141, 0.2)',
          borderRadius: '24px',
          px: 12,
          py: 6,
          mx: 2,
          position: 'relative',

          '@media (max-width: 640px)': {
            px: 6,
            width: '100%',
          },
          '@media (max-width: 480px)': {
            px: 2,
            mx: 1,
          },
        }}
      >
        <Box
          component='form'
          sx={{
            width: '440px',
            mx: 'auto',

            '@media (max-width: 640px)': {
              width: '100%',
            },
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Typography
            sx={{
              fontSize: '40px',
              fontWeight: 400,
              mb: 3,
              textAlign: 'center',
            }}
          >
            Add Children
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              mb: 6,
            }}
          >
            <Box>
              <CustomInput
                placeholder='john'
                label='first name'
                {...register('first_name')}
              />
              {errors.first_name && (
                <Typography sx={{ color: 'red', fontSize: '12px', mt: 1 }}>
                  {errors.first_name.message}
                </Typography>
              )}
            </Box>

            <Box>
              <CustomInput
                placeholder='Doe'
                label='last name'
                {...register('last_name')}
              />
              {errors.last_name && (
                <Typography sx={{ color: 'red', fontSize: '12px', mt: 1 }}>
                  {errors.last_name.message}
                </Typography>
              )}
            </Box>

            <Box>
              <CustomInput
                placeholder='johndoe@email.com'
                label='email'
                type='email'
                {...register('email')}
              />
              {errors.email && (
                <Typography sx={{ color: 'red', fontSize: '12px', mt: 1 }}>
                  {errors.email.message}
                </Typography>
              )}
            </Box>

            <Box>
              <CustomInput
                type='password'
                placeholder='•••••••••••••••••••'
                label='password'
                {...register('password')}
              />
              {errors.password && (
                <Typography sx={{ color: 'red', fontSize: '12px', mt: 1 }}>
                  {errors.password.message}
                </Typography>
              )}
            </Box>

            <Box>
              <CustomInput
                type='password'
                placeholder='•••••••••••••••••••'
                label='confirm password'
                {...register('confirm_password')}
              />
              {errors.confirm_password && (
                <Typography sx={{ color: 'red', fontSize: '12px', mt: 1 }}>
                  {errors.confirm_password.message}
                </Typography>
              )}
            </Box>
          </Box>

          <CustomButton
            type='submit'
            disabled={isPending}
            sx={{
              width: '100%',
              fontSize: '16px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              borderRadius: '100px',
              py: '14px',
            }}
          >
            {isPending ? 'Accessing...' : 'Access Grant'}{' '}
            {!isPending && (
              <Box
                component='img'
                src={chevronRightIcon}
                alt='Chevron right icon'
                sx={{ height: '12px' }}
              />
            )}
          </CustomButton>
        </Box>

        <BackCircle redirect={-1} />
      </Box>

      <Box
        component='img'
        src={BottomMaskImg}
        alt='Bottom Mask'
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          zIndex: -50,
        }}
      />
    </Box>
  );
};

export default AddChildren;
