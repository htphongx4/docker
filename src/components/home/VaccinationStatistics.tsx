import { Box, Divider, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

interface IVaccinationData {
  title: string;
  quantity: number;
  measure: string;
  icon: any;
}

const VaccinationStatistics: FC = () => {
  const VaccinationData: IVaccinationData[] = [
    {
      title: 'Đối tượng đăng ký',
      quantity: 11423324,
      measure: 'lượt',
      icon: <Image height={44} width={46} alt="icon" src={'svg/ic_register_people.svg'} />
    },
    {
      title: 'Số mũi tiêm hôm qua',
      quantity: 1432532,
      measure: 'mũi',
      icon: <Image height={44} width={46} alt="icon" src={'svg/ic_injection.svg'} />
    },
    {
      title: 'Số mũi đã tiêm toàn quốc',
      quantity: 69435234,
      measure: 'mũi',
      icon: <Image height={44} width={46} alt="icon" src={'svg/ic_injected_people.svg'} />
    }
  ];
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      sx={{
        padding: '16px 36px',
        backgroundColor: '#F7FBFE'
      }}
    >
      {VaccinationData.map((item, index) => (
        <Stack
          direction={'row'}
          key={index}
          spacing={1}
          alignItems={'center'}
          width={'100%'}
          px={'16px'}
        >
          <Box>{item.icon}</Box>
          <Stack direction={'column'}>
            <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>{item.title}</Typography>
            <Stack direction={'row'} spacing={'4px'}>
              <Typography sx={{ fontSize: '28px', fontWeight: '600' }}>
                {item.quantity.toLocaleString()}
              </Typography>
              <Typography sx={{ fontSize: '13px', fontWeight: '400', alignSelf: 'flex-end' }}>
                {'(' + item.measure + ')'}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default VaccinationStatistics;
