'use client';

import { Container, Stack, Tab, Tabs, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface INavItem {
  id: number | string;
  label: string;
  path: string;
  icon?: any;
}

const navItems: INavItem[] = [
  {
    id: 1,
    label: 'Chứng nhận tiêm chủng',
    path: '/vaccine-certificate'
  },
  {
    id: 2,
    label: 'Kết quả đăng ký',
    path: '/vaccine-registration-result'
  },
  {
    id: 3,
    label: 'Tài khoản',
    path: '/account'
  }
];
const AccountNavigate: FC = () => {
  const pathname = usePathname();
  return (
    <Container maxWidth="xl">
      <Stack direction="row" spacing={2} width="100%">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.path);
          return (
            <Link
              href={item.path}
              key={item.id}
              style={{
                textDecoration: 'none',
                color: isActive ? '#000' : '#6E6D7A',
                height: '64px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottom: isActive ? '2px solid #000' : '2px solid transparent',
                padding: '0 8px'
              }}
            >
              <Typography>{item.label}</Typography>
            </Link>
          );
        })}
      </Stack>
    </Container>
  );
};

export default AccountNavigate;
