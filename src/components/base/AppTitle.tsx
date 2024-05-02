'use client';
import { FC } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';

interface IAppTitle {
  title: string;
  path?: string;
}
const AppTitle: FC<IAppTitle> = ({ title, path }) => {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#F5F5F5' }}>
      <Container maxWidth="xl">
        <Typography fontSize={28} fontWeight={500} py={1.5}>
          {title}
        </Typography>
      </Container>
    </Box>
  );
};

export default AppTitle;
