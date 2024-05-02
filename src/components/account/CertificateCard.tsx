import { Box, Paper, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import DateRangeIcon from '@mui/icons-material/DateRange';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import Image from 'next/image';

interface IProp {
  doseNumber: number;
}
const CertificateCard: FC<IProp> = ({ doseNumber }) => {
  return (
    <Paper
      sx={{
        padding: '24px',
        borderRadius: '8px 8px 8px 0px',
        backgroundColor: doseNumber < 2 ? '#FFBE33' : '#43A047'
      }}
      elevation={3}
    >
      <Stack direction="column" spacing={3} alignItems="center">
        <Image src={'/svg/logo.svg'} width={100} height={100} alt="logo" />
        <Typography fontSize="24px" fontWeight={500} color="#fff">
          ĐÃ TIÊM 2 MŨI VẮC XIN
        </Typography>
        <Image src={'/images/qrcode.png'} width={196} height={196} alt="qr_code" />
        <Paper
          sx={{
            padding: '16px',
            borderRadius: '8px 8px 8px 0px',
            backgroundColor: '#fff',
            width: '100%'
          }}
        >
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={1}>
              <PersonIcon />
              <Stack>
                <Typography>Họ và tên</Typography>
                <Typography fontWeight={500}>Nguyễn Văn A</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={1}>
              <DateRangeIcon />
              <Stack>
                <Typography>Ngày sinh</Typography>
                <Typography fontWeight={500}>16/10/1994</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={1}>
              <FeaturedVideoIcon />
              <Stack>
                <Typography>Số CMND/CCCD</Typography>
                <Typography fontWeight={500}>030012345678</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </Paper>
  );
};

export default CertificateCard;
