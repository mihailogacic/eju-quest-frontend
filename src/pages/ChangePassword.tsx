import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box, Typography } from '@mui/material';
import CustomInput from '../components/common/CustomInput';
import BottomMaskImg from '../assets/images/bottom-mask.png';
import CustomButton from '../components/common/CustomButton';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  changePasswordSchema,
  ChangePasswordFormInputs,
} from '../utils/validation';
import { useConfirmResetPassword } from '../hooks/auth-hook';
import chevronRightIcon from '../assets/icons/chevron-right.png';

const ChangePassword = () => {
  const { uid, token } = useParams();
  const { mutate, isPending } = useConfirmResetPassword(uid!, token!);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormInputs>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = (data: ChangePasswordFormInputs) => {
    mutate({
      new_password: data.new_password,
      confirm_new_password: data.confirm_new_password,
    });
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
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '40px',
            fontFamily: 'Times New Roman, Times, serif',
            fontWeight: 400,
            mb: 4,
          }}
        >
          EjuQuest
        </Typography>

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
          <Typography sx={{ fontSize: '30px', fontWeight: 600, mb: 3 }}>
            New Password
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              mb: 3,
            }}
          >
            <Box>
              <CustomInput
                type='password'
                placeholder='•••••••••••••••••••'
                label='password'
                {...register('new_password')}
              />

              {errors.new_password && (
                <Typography sx={{ color: 'red', fontSize: '12px', mt: 1 }}>
                  {errors.new_password.message}
                </Typography>
              )}
            </Box>

            <Box>
              <CustomInput
                type='password'
                placeholder='•••••••••••••••••••'
                label='confirm password'
                {...register('confirm_new_password')}
              />

              {errors.confirm_new_password && (
                <Typography sx={{ color: 'red', fontSize: '12px', mt: 1 }}>
                  {errors.confirm_new_password.message}
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
            {isPending ? 'Confirming...' : 'Confirm'}{' '}
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

export default ChangePassword;
