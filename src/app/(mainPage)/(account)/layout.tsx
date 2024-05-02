import AccountNavigate from '@/components/account/AccountNavigate';
import { Box, Container, Stack } from '@mui/material';

export default function HomeLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack spacing={4} direction="column" alignItems="center">
      <Stack width="100%" sx={{ boxShadow: '0 3px 2px -2px rgba(0, 0, 0, 0.2)' }}>
        <AccountNavigate />
      </Stack>
      <Container maxWidth="xl" sx={{ minHeight: 'calc(100vh)', paddingBottom: '120px' }}>
        {children}
      </Container>
    </Stack>
  );
}
