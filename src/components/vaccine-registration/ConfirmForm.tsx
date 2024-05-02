import { Button, Checkbox, Stack, Typography, Divider } from '@mui/material';
import Image from 'next/image';
import { Dispatch, FC, SetStateAction } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface ITerm {
  id: number;
  value: string;
  icon: any;
}

interface IProp {
  setActiveStep: Dispatch<SetStateAction<number>>;
}

const terms: ITerm[] = [
  {
    id: 1,
    value:
      'Tiêm chủng vắc xin là biện pháp phòng chống dịch hiệu quả, tuy nhiên vắc xin phòng COVID-19 có thể không phòng được bệnh hoàn toàn. Người được tiêm chủng vắc xin phòng COVID-19 có thể phòng được bệnh hoặc giảm mức độ nặng nếu mắc bệnh. Tuy nhiên, sau khi tiêm chủng vẫn phải tiếp tục thực hiện nghiêm các biện pháp phòng chống dịch theo quy định.',
    icon: <Image src={'/svg/shield.svg'} height={24} width={24} alt="shieldIcon" />
  },
  {
    id: 2,
    value:
      'Tiêm chủng vắc xin phòng COVID-19 có thể gây ra một số biểu hiện tại chỗ tiêm hoặc toàn thân như sưng, đau chỗ tiêm, nhức đầu, buồn nôn, sốt, đau cơ…hoặc tai biến nặng sau tiêm chủng. Tiêm vắc xin mũi 2 do Pfizer sản xuất ở người đã tiêm mũi 1 bằng vắc xin AstraZeneca có thể tăng khả năng xảy ra phản ứng thông thường sau tiêm chủng.',
    icon: <Image src={'/svg/vaccine2.svg'} height={24} width={24} alt="shieldIcon" />
  },
  {
    id: 3,
    value:
      'Khi có triệu chứng bất thường về sức khỏe, người được tiêm chủng cần đến ngay cơ sở y tế gần nhất để được tư vấn, thăm khám và điều trị kịp thời.',
    icon: <Image src={'/svg/hospital.svg'} height={24} width={24} alt="shieldIcon" />
  }
];
const ConfirmForm: FC<IProp> = ({ setActiveStep }) => {
  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="column" spacing={2} paddingTop={4}>
        {terms.map((item, index) => (
          <Stack direction="row" spacing={1} key={index} alignItems="center">
            {item.icon}
            <Typography>{`${index + 1}. ${item.value}`}</Typography>
          </Stack>
        ))}
      </Stack>
      <Divider />
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography>
          Sau khi đã đọc các thông tin nêu trên, tôi đã hiểu về các nguy cơ và:
        </Typography>
        <Stack direction="row" alignItems="center">
          <Checkbox />
          <Typography>Đồng ý tiêm chủng</Typography>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
        <Button
          onClick={() => {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
          }}
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
          Quay lại
        </Button>
        <Button
          onClick={() => {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
          }}
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
          Tiếp tục
          <ArrowForwardIcon />
        </Button>
      </Stack>
    </Stack>
  );
};

export default ConfirmForm;
