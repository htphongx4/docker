import CertificateCard from '@/components/account/CertificateCard';
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import Link from 'next/link';

interface IVaccinationData {
  doseNumber: number;
  date: string;
  vaccineName: string;
  lotNumber: string;
  vaccinationLocation: string;
}

const vaccinationData: IVaccinationData[] = [
  {
    doseNumber: 1,
    date: '2022-03-15',
    vaccineName: 'Pfizer-BioNTech',
    lotNumber: 'NA2732',
    vaccinationLocation: 'TYT Dịch Vọng Hậu'
  },
  {
    doseNumber: 2,
    date: '2022-04-12',
    vaccineName: 'Pfizer-BioNTech',
    lotNumber: 'NA2732',
    vaccinationLocation: 'TYT Dịch Vọng Hậu'
  }
];

export default function VaccineCertificate() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={9}>
        <Stack direction="column" spacing={4}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Typography textTransform="uppercase">Cộng hòa xã hội chủ nghĩa Việt Nam</Typography>
            <Typography fontWeight={500}>Độc lập - Tự Do - Hạnh phúc</Typography>
          </Stack>
          <Stack>
            <Typography fontSize={24} fontWeight={500} textAlign="center">
              CHỨNG NHẬN TIÊM CHỦNG COVID-19
            </Typography>
          </Stack>
          <Stack direction="column" spacing={1}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Typography>Họ và tên</Typography>
                <Typography fontWeight={500}>Nguyễn Văn A</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography>Ngày sinh</Typography>
                <Typography fontWeight={500}>16/10/1994</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography>Số CMND/CCCD</Typography>
                <Typography fontWeight={500}>030012345678</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography>Số thẻ BHYT</Typography>
                <Typography fontWeight={500}>030094005102</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item>
                <Typography>Địa chỉ </Typography>
                <Typography fontWeight={500}>
                  Phường Giang Biên - Quận Long Biên - Thành phố Hà Nội
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item>
                <Typography>Kết luận</Typography>
                <Typography fontWeight={500}>
                  Đã được tiêm phòng vắc xin phòng bệnh Covid-19
                </Typography>
              </Grid>
            </Grid>
          </Stack>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="vaccine_table">
              <TableHead sx={{ backgroundColor: '#EEEEEE' }}>
                <TableRow sx={{ fontWeight: 500 }}>
                  <TableCell size="small" align="center">
                    Mũi số
                  </TableCell>
                  <TableCell align="center">Thời gian tiêm</TableCell>
                  <TableCell align="center">Tên Vắc xin</TableCell>
                  <TableCell align="center">Số lô</TableCell>
                  <TableCell align="center">Nơi tiêm</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {vaccinationData.map((row) => (
                  <TableRow
                    key={row.doseNumber}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell size="small" align="center">
                      {row.doseNumber}
                    </TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center">{row.vaccineName}</TableCell>
                    <TableCell align="center">{row.lotNumber}</TableCell>
                    <TableCell align="center">{row.vaccinationLocation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack direction="row" justifyContent="center">
            <Link href={'/vaccine-registration'}>
              <Button
                variant="outlined"
                sx={{
                  color: '#fff',
                  borderColor: '#fff',
                  fontSize: '15px',
                  borderRadius: '8px 8px 8px 0',
                  fontWeight: 500,
                  backgroundColor: '#303F9F',
                  '&:hover': {
                    backgroundColor: '#303F9F',
                    opacity: '0.9'
                  }
                }}
              >
                Đăng ký mũi tiêm tiếp theo
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <CertificateCard doseNumber={vaccinationData.length} />
      </Grid>
    </Grid>
  );
}
