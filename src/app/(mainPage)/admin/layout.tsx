import AdminNavigate from '@/components/admin/AdminNavigate';
import { Stack } from '@mui/material';

export default function AdminLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack spacing={4} direction="column" alignItems="center">
      <Stack width="100%" sx={{ boxShadow: '0 3px 2px -2px rgba(0, 0, 0, 0.2)' }}>
        <AdminNavigate />
      </Stack>
      <Stack sx={{ width: '100%', minHeight: 'calc(100vh)', paddingBottom: '120px' }}>
        {children}
      </Stack>
    </Stack>
  );
}
