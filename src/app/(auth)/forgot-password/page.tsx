'use client';
//libs
import { Box, Button, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { IForgotPasswordForm } from '@/types/auth';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export default function ForgotPassword() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const forgotPasswordSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required')
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IForgotPasswordForm>({
    resolver: yupResolver(forgotPasswordSchema)
  });

  const onSubmit = async (values: IForgotPasswordForm) => {
    console.log('Enter: ', values.email);
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    router.push('/forgot-password');
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
          '&::after': {
            content: '" (*)"',
            color: 'red'
          }
        }}
      >
        Để khôi phục mật khẩu, vui lòng nhập đúng email bạn đã dùng để đăng ký
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
          alignItems: 'center'
        }}
      >
        <TextField
          {...register('email')}
          id="email"
          type="email"
          label="Email"
          placeholder="user@gmail.com"
          variant="outlined"
          error={!!errors.email?.message}
          helperText={errors.email?.message}
          sx={{
            width: '100%'
          }}
        />
        <Box
          sx={{
            display: 'flex',
            gap: '24px'
          }}
        >
          <Link href={'/auth/login'}>
            <Button
              variant="outlined"
              sx={{
                color: '#303F9F',
                borderColor: '#303F9F',
                borderRadius: '8px 8px 8px 0',
                fontWeight: 500,
                minWidth: '90px'
              }}
            >
              Quay lại
            </Button>
          </Link>
          <Button
            disabled={isSubmitting || !isValid}
            type="submit"
            variant="contained"
            sx={{
              borderColor: '#303F9F',
              borderRadius: '8px 8px 8px 0',
              fontWeight: 500,
              minWidth: '90px'
            }}
          >
            Gửi
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
