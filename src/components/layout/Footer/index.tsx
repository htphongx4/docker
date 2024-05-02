import { AppBar, Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <Box sx={{ backgroundColor: '#2D2188', width: '100%' }}>
      <Container sx={{ padding: '32px 16px' }} maxWidth="xl">
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Stack sx={{ color: '#fff' }} spacing={1}>
            <Typography>
              © Bản quyền thuộc TRUNG TÂM CÔNG NGHỆ PHÒNG, CHỐNG DỊCH COVID-19 QUỐC GIA
            </Typography>
            <Stack direction={'row'} spacing={'4px'}>
              <Typography>Phát triển bởi </Typography>
              <Typography color={'red'}>Viettel</Typography>{' '}
            </Stack>
            <Image src={'/images/logo2bo.png'} width={195} height={89} alt={'logo2bo'} />
          </Stack>
          <Stack sx={{ color: '#fff' }} spacing={2} alignItems={'flex-end'}>
            <Typography>
              Tải sổ sức khỏe điện tử để đăng ký tiêm và nhận giấy chứng nhận tiêm
            </Typography>
            <Stack direction={'row'} spacing={'4px'}>
              <Button
                variant="outlined"
                sx={{
                  color: '#fff',
                  borderColor: '#fff',
                  fontSize: '15px',
                  borderRadius: '8px 8px 8px 0',
                  fontWeight: 500,
                  backgroundColor: '#2D2188',
                  height: '40px',
                  width: 'auto',
                  '&:hover': {
                    backgroundColor: '#2D2188',
                    opacity: '0.9'
                  },
                  '&.Mui-disabled': {
                    backgroundColor: '#2D2188',
                    opacity: '0.6',
                    color: '#fff'
                  }
                }}
              >
                App tiêm di động (Cho HCM)
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: '#fff',
                  borderColor: '#fff',
                  fontSize: '15px',
                  borderRadius: '8px 8px 8px 0',
                  fontWeight: 500,
                  backgroundColor: '#2D2188',
                  height: '40px',
                  width: 'auto',
                  '&:hover': {
                    backgroundColor: '#2D2188',
                    opacity: '0.9'
                  },
                  '&.Mui-disabled': {
                    backgroundColor: '#2D2188',
                    opacity: '0.6',
                    color: '#fff'
                  }
                }}
              >
                App tiêm di động (Cho HCM)
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: '#fff',
                  borderColor: '#fff',
                  fontSize: '15px',
                  borderRadius: '8px 8px 8px 0',
                  fontWeight: 500,
                  backgroundColor: '#2D2188',
                  height: '40px',
                  width: 'auto',
                  '&:hover': {
                    backgroundColor: '#2D2188',
                    opacity: '0.9'
                  },
                  '&.Mui-disabled': {
                    backgroundColor: '#2D2188',
                    opacity: '0.6',
                    color: '#fff'
                  }
                }}
              >
                App tiêm di động (Cho HCM)
              </Button>
            </Stack>
            <Image src={'/images/handle_cert.png'} width={195} height={89} alt={'logo2bo'} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
