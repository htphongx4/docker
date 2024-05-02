import { Button, Checkbox, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { Dispatch, FC, SetStateAction } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const RegistrationResult: FC = () => {
  return (
    <Stack direction="column" spacing={2}>
      <Stack alignItems="center">
        <Stack direction="row" spacing={1}>
          <Typography fontWeight={500} fontSize={20}>
            Đăng ký tiêm chủng COVID-19 thành công. Mã đặt tiêm của bạn là
          </Typography>
          <Typography fontWeight={500} fontSize={20} color="red">
            0120211103501237
          </Typography>
        </Stack>
      </Stack>
      <Typography textAlign="center">
        Cảm ơn quý khách đã đăng ký tiêm chủng vắc xin COVID-19. Hiện tại Bộ y tế đang tiến hành thu
        thập nhu cầu và thông tin để lập danh sách đối tượng đăng ký tiêm vắc xin COVID-19 theo từng
        địa bàn. Chúng tôi sẽ liên hệ với quý khách theo số điện thoại 0123456789 khi có kế hoạch
        tiêm trong thời gian sớm nhất.
      </Typography>
      <Stack direction="row" spacing={1} textAlign="center" justifyContent="center">
        <Typography>Mời bạn tải ứng dụng "SỔ SỨC KHỎE ĐIỆN TỬ" tại</Typography>
        <Typography color="red">https://hssk.kcb.vn/#/sskdt</Typography>
        <Typography>
          để theo dõi kết quả đăng ký tiêm và nhận chứng nhận tiêm chủng COVID-19
        </Typography>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography>Họ và tên</Typography>
          <Typography fontWeight={500}>Nguyễn Văn A</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Ngày sinh</Typography>
          <Typography fontWeight={500}>16/10/1994</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Giới tính</Typography>
          <Typography fontWeight={500}>Nam</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography>Số CMND/CCCD/Mã định danh công dân</Typography>
          <Typography fontWeight={500}>Nguyễn Văn A</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Số thẻ BHYT</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography>Tỉnh/Thành phố</Typography>
          <Typography fontWeight={500}>Nam Định</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Quận/Huyện</Typography>
          <Typography fontWeight={500}>Giao Thủy</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Xã/Phường</Typography>
          <Typography fontWeight={500}>Giao Long</Typography>
        </Grid>
      </Grid>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
        <Link href={'/'}>
          <Button
            variant="outlined"
            sx={{
              color: '#303F9F',
              borderColor: '#303F9F',
              fontSize: '15px',
              borderRadius: '8px 8px 8px 0',
              fontWeight: 500,
              backgroundColor: '#fff',
              height: '40px',
              width: 'auto',
              '&:hover': {
                backgroundColor: '#fff',
                opacity: '0.8'
              }
            }}
          >
            <ArrowBackIcon />
            Trang chủ
          </Button>
        </Link>
        <Button
          variant="outlined"
          sx={{
            color: '#fff',
            borderColor: '#303F9F',
            fontSize: '15px',
            borderRadius: '8px 8px 8px 0',
            fontWeight: 500,
            backgroundColor: '#303F9F',
            height: '40px',
            width: 'auto',
            '&:hover': {
              backgroundColor: '#303F9F',
              opacity: '0.9'
            },
            '&.Mui-disabled': {
              backgroundColor: '#303F9F',
              opacity: '0.6',
              color: '#fff'
            }
          }}
        >
          Xuất thông tin
          <ArrowForwardIcon />
        </Button>
      </Stack>
    </Stack>
  );
};

export default RegistrationResult;
