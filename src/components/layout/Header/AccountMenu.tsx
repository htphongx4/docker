'use client';
import { selectAuthData } from '@/lib/features/auth/authSlice';
import { useAppSelector } from '@/lib/store';
import { Box, Button } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

const AccountMenu: FC = () => {
  const user = useAppSelector(selectAuthData);
  return (
    <Box>
      {user && user.userName ? (
        <Link href={'/profile'}>
          <Button
            variant="outlined"
            sx={{
              color: '#303F9F',
              borderColor: '#303F9F',
              fontSize: '15px',
              borderRadius: '8px 8px 8px 0',
              fontWeight: 500,
              backgroundColor: '#fff',
              '&:hover': {
                backgroundColor: '#fff',
                opacity: '0.9'
              }
            }}
          >
            {user.userName}
          </Button>
        </Link>
      ) : (
        <Link href={'/login'}>
          <Button
            variant="outlined"
            sx={{
              color: '#303F9F',
              borderColor: '#303F9F',
              fontSize: '15px',
              borderRadius: '8px 8px 8px 0',
              fontWeight: 500,
              backgroundColor: '#fff',
              '&:hover': {
                backgroundColor: '#fff',
                opacity: '0.9'
              }
            }}
          >
            Đăng nhập
          </Button>
        </Link>
      )}
    </Box>
  );
};

export default AccountMenu;
