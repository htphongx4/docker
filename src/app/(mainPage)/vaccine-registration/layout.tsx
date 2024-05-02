import AppTitle from '@/components/base/AppTitle';
import { Container, Stack, Typography } from '@mui/material';

export default function HomeLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack spacing={4} direction="column" alignItems="center">
      <AppTitle title="Tra cứu đăng ký tiêm" />
      <Container maxWidth="xl" sx={{ minHeight: 'calc(100vh)', paddingBottom: '120px' }}>
        {children}
      </Container>
    </Stack>
  );
}
