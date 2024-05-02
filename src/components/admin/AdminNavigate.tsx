'use client';

import { Container, Stack, Typography } from '@mui/material';
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
    label: 'Điểm tiêm',
    path: '/injection-point'
  },
  {
    id: 2,
    label: 'Đăng ký',
    path: '/vaccine-registration'
  },
  {
    id: 3,
    label: 'Tài liệu',
    path: '/document'
  }
];
const AdminNavigate: FC = () => {
  const pathname = usePathname();
  return (
    <Container maxWidth="xl">
      <Stack direction="row" spacing={2} width="100%">
        {navItems.map((item) => {
          const isActive = pathname === `/admin${item.path}`;
          return (
            <Link
              href={`/admin/${item.path}`}
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

export default AdminNavigate;
