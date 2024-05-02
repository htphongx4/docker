//styles
import { Box } from '@mui/material';
import Image from 'next/image';

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex'
      }}
    >
      <Box
        sx={{
          flexBasis: '50%',
          position: 'relative'
        }}
      >
        <Image src={'/images/auth-background.png'} alt="auth bg" fill />
      </Box>
      <Box
        sx={{
          flexBasis: '50%',
          height: '100vh',
          maxHeight: '100vh',
          overflowY: 'auto'
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
