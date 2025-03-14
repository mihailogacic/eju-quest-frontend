import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box, Typography, Link } from '@mui/material';
import CustomInput from '../components/common/CustomInput';
import BottomMaskImg from '../assets/images/bottom-mask.png';
import CustomButton from '../components/common/CustomButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginFormInputs } from '../utils/validation';
import chevronRightIcon from '../assets/icons/chevron-right.png';

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log('Form submitted:', data);
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
      }}
    >
      <Box
        sx={{
          minHeight: '640px',
          backgroundColor: 'rgba(89, 89, 89, 0.2)',
          border: '2px solid rgba(141, 141, 141, 0.2)',
          borderRadius: '24px',
          px: 12,
          py: 6,
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '40px',
            fontFamily: 'Times New Roman, Times, serif',
            fontWeight: '400px',
            mb: 4,
          }}
        >
          EjuQuest
        </Typography>

        <Box
          component='form'
          sx={{ width: '440px', mx: 'auto' }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Typography sx={{ fontSize: '30px', fontWeight: 600, mb: 3 }}>
            Sign In
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
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: errors.password ? 'space-between' : 'end',
                  mt: 1,
                }}
              >
                {errors.password && (
                  <Typography sx={{ color: 'red', fontSize: '12px' }}>
                    {errors.password.message}
                  </Typography>
                )}
                <Link
                  sx={(theme) => ({
                    fontSize: '12px',
                    color: theme.palette.text.steelGray,
                    cursor: 'pointer',
                  })}
                >
                  Forgot your password?
                </Link>
              </Box>
            </Box>
          </Box>

          <CustomButton
            type='submit'
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
            Sign In{' '}
            <Box
              component='img'
              src={chevronRightIcon}
              alt='Chevron right icon'
              sx={{ height: '12px' }}
            />
          </CustomButton>

          <Typography
            sx={(theme) => ({
              fontSize: '12px',
              fontWeight: 400,
              color: theme.palette.text.steelGray,
              mt: 1,
            })}
          >
            By Signing up to Chainpage, means you agree to our{' '}
            <Link
              sx={(theme) => ({
                cursor: 'pointer',
                color: theme.palette.text.steelGray,
                textDecoration: 'underline',
              })}
            >
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link
              sx={(theme) => ({
                cursor: 'pointer',
                color: theme.palette.text.steelGray,
                textDecoration: 'underline',
              })}
            >
              Terms of Service
            </Link>
          </Typography>

          <Typography
            sx={(theme) => ({
              color: theme.palette.text.darkGray,
              textAlign: 'center',
              mt: 4,
            })}
          >
            Don't you have an account?{' '}
            <Link
              onClick={() => navigate('/sign-up')}
              sx={{
                textDecoration: 'underline',
                color: 'white',
                fontWeight: 900,
                cursor: 'pointer',
              }}
            >
              Sign Up
            </Link>
          </Typography>
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

export default Login;
