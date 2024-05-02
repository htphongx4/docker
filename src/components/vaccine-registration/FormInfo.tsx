import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import * as yup from 'yup';
import { FC } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { attentions, groupPriorities, sessions } from '@/utils/constants';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

interface IProp {
  setActiveStep: Dispatch<SetStateAction<number>>;
}

export interface IVaccineRegistrationFormData {
  groupPriority: string;
  hic?: string;
  job?: string;
  workingPlace?: string;
  address?: string;
  appointmentDate: Dayjs;
  session: string;
}
const FormInfo: FC<IProp> = ({ setActiveStep }) => {
  const formInfoSchema = yup
    .object()
    .shape({
      groupPriority: yup.string().required('Không để trống'),
      hic: yup.string(),
      job: yup.string(),
      workingPlace: yup.string(),
      address: yup.string(),
      appointmentDate: yup
        .mixed<Dayjs>()
        .required()
        .test('is-future-date', 'Ngày không hợp lệ', function (value) {
          return value && value.isAfter(dayjs(), 'day');
        }),
      session: yup.string().required()
    })
    .required();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid }
  } = useForm<IVaccineRegistrationFormData>({
    mode: 'onChange',
    defaultValues: {
      groupPriority: '',
      hic: '',
      job: '',
      workingPlace: '',
      address: '',
      appointmentDate: dayjs().add(1, 'day'),
      session: ''
    },
    resolver: yupResolver(formInfoSchema)
  });
  const onSubmit = async (values: IVaccineRegistrationFormData) => {
    console.log('>>> Check data: ', values);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  return (
    <Stack direction="column" spacing={2}>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 3
        }}
      >
        <Typography fontWeight={500}>1. Thông tin người đăng ký tiêm</Typography>
        <Stack direction="row" spacing={2}>
          <Stack direction="column" spacing={1} width={330}>
            <FormLabel
              sx={{
                color: 'black',
                '&::after': {
                  content: '" (*)"',
                  color: 'red'
                }
              }}
            >
              Nhóm ưu tiên
            </FormLabel>
            <Controller
              control={control}
              name="groupPriority"
              render={({ field }) => (
                <FormControl>
                  <Select
                    id="groupPriority"
                    {...field}
                    error={!!errors.groupPriority?.message}
                    sx={{
                      '& .MuiSelect-select .notranslate::after': {
                        content: `"Nhóm ưu tiên"`,
                        opacity: 0.4
                      }
                    }}
                  >
                    {groupPriorities.map((item) => (
                      <MenuItem key={item.id} value={item.value}>
                        {item.value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
          </Stack>
          <Stack direction="column" spacing={1} width={330}>
            <FormLabel sx={{ color: 'black' }}>Số thẻ BHYT</FormLabel>
            <TextField
              {...register('hic')}
              id="hic"
              type="text"
              placeholder="Số thẻ BHYT"
              variant="outlined"
            />
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Stack direction="column" spacing={1} width={330}>
            <FormLabel sx={{ color: 'black' }}>Nghề nghiệp</FormLabel>
            <TextField
              {...register('job')}
              id="job"
              type="text"
              placeholder="Nghề nghiệp"
              variant="outlined"
            />
          </Stack>
          <Stack direction="column" spacing={1} width={330}>
            <FormLabel sx={{ color: 'black' }}>Đơn vị công tác</FormLabel>
            <TextField
              {...register('workingPlace')}
              id="workingPlace"
              type="text"
              placeholder="Đơn vị công tác"
              variant="outlined"
            />
          </Stack>
          <Stack direction="column" spacing={1} width={330}>
            <FormLabel sx={{ color: 'black' }}>Địa chỉ hiện tại</FormLabel>
            <TextField
              {...register('address')}
              id="address"
              type="text"
              placeholder="Địa chỉ hiện tại"
              variant="outlined"
            />
          </Stack>
        </Stack>
        <Typography fontWeight={500}>2. Thông tin đăng ký tiêm chủng</Typography>
        <Stack direction="row" spacing={2}>
          <Stack direction="column" spacing={1} width={330}>
            <FormLabel sx={{ color: 'black' }}>Ngày muốn được tiêm (dự kiến)</FormLabel>
            <Controller
              name="appointmentDate"
              control={control}
              render={({ field, fieldState }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker disablePast {...field} format="DD/MM/YYYY" />
                  {errors.appointmentDate?.message && (
                    <FormHelperText error>{errors.appointmentDate?.message}</FormHelperText>
                  )}
                </LocalizationProvider>
              )}
            />
          </Stack>

          <Stack direction="column" spacing={1} width={330}>
            <FormLabel sx={{ color: 'black' }}>Buổi tiêm mong muốn</FormLabel>
            <Controller
              control={control}
              name="session"
              render={({ field }) => (
                <FormControl>
                  <Select
                    id="session"
                    {...field}
                    error={!!errors.session?.message}
                    sx={{
                      '& .MuiSelect-select .notranslate::after': {
                        content: `"Buổi tiêm mong muốn"`,
                        opacity: 0.42
                      }
                    }}
                  >
                    {sessions.map((item) => (
                      <MenuItem key={item.id} value={item.value}>
                        {item.value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
          </Stack>
        </Stack>
        <Stack direction="column">
          <Typography sx={{ color: 'red', marginBottom: '10px' }}>Lưu ý: </Typography>
          {attentions.map((item) => (
            <Typography key={item.id} component="li" sx={{ color: 'red', paddingLeft: '10px' }}>
              {item.value}
            </Typography>
          ))}
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Link href="/">
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
              Hủy bỏ
            </Button>
          </Link>
          <Button
            disabled={!isValid}
            type="submit"
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
      </Box>
    </Stack>
  );
};

export default FormInfo;
