'use client';
//libs
import { Box, Button, FormLabel, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { IUserLoginForm } from '@/types/auth';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useLoginMutation } from '@/api/auth';
import { useFormStatus } from 'react-dom';

export default function LoginPage() {
  const router = useRouter();

  const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .required('Password is require')
      .min(8, 'Password must be at least 8 characters')
      .test('no-spaces', 'Password cannot contain spaces', (value) => !value.includes(' '))
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IUserLoginForm>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(loginSchema)
  });
  const [onLogin, { isLoading: isLoggingIn, error: loginError }] = useLoginMutation();

  const onSubmit = async (values: IUserLoginForm) => {
    await onLogin(values);
    router.push('/');
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '32px',
        gap: '24px'
      }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: '600'
        }}
      >
        Đăng nhập vào tài khoản
      </Typography>

      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '400px'
        }}
      >
        <Box sx={{ width: '100%' }}>
          <FormLabel sx={{ fontWeight: '500' }}>Email</FormLabel>
          <TextField
            {...register('email')}
            id="email"
            type="email"
            placeholder="user@gmail.com"
            variant="outlined"
            error={!!errors.email?.message}
            helperText={errors.email?.message}
            sx={{
              width: '100%',
              marginTop: '6px'
            }}
          />
        </Box>
        <Box sx={{ width: '100%' }}>
          <FormLabel sx={{ fontWeight: '500' }}>Password</FormLabel>
          <TextField
            {...register('password')}
            id="password"
            type="password"
            placeholder="password"
            variant="outlined"
            error={!!errors.password?.message}
            helperText={errors.password?.message}
            sx={{
              width: '100%',
              marginTop: '6px'
            }}
          />
        </Box>
        <Box
          sx={{
            width: '100%'
          }}
        >
          <Button
            disabled={isLoggingIn || !isValid}
            type="submit"
            variant="outlined"
            sx={{
              color: 'white',
              backgroundColor: '#66BB6A',
              borderRadius: '8px',
              fontWeight: 500,
              width: '100%',
              padding: '10px 0',
              '&:hover': {
                background: '#66BB6A',
                opacity: '0.7'
              },
              '&:disabled': {
                background: '#66BB6A',
                opacity: '0.7'
              }
            }}
          >
            Đăng nhập
          </Button>
          <Typography
            sx={{
              color: 'red',
              textAlign: 'center',
              fontSize: '13px',
              display: 'block',
              paddingTop: '12px'
            }}
          >
            {/* {loginError && (
              <div>
                Error: {loginError.status}
              </div>
            )} */}
          </Typography>
        </Box>
        <Link href={'/forgot-password'} style={{ width: '100%', textDecoration: 'none' }}>
          <Typography
            sx={{
              color: '#3949AB',
              textAlign: 'right',
              '&:hover': {
                opacity: '0.7'
              }
            }}
          >
            Quên mật khẩu
          </Typography>
        </Link>
        <Typography
          sx={{
            width: '100%',
            textAlign: 'center'
          }}
        >
          Hoặc đăng ký tài khoản, nếu bạn chưa đăng ký!
        </Typography>
        <Link href={'/auth/register'} style={{ width: '100%' }}>
          <Button
            variant="outlined"
            sx={{
              color: '#66BB6A',
              backgroundColor: '#fff',
              border: '2px solid #66BB6A',
              borderRadius: '8px',
              fontWeight: 500,
              width: '100%',
              padding: '10px 0',
              '&:hover': {
                opacity: '0.7',
                border: '2px solid #66BB6A'
              }
            }}
          >
            Đăng ký
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
