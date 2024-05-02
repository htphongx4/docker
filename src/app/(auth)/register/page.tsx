'use client';
//libs
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormHelperText
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useForm, Controller, useWatch, Control } from 'react-hook-form';
import * as yup from 'yup';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { IUserRegisterForm } from '@/types/auth';
import { useFetchDistrictQuery, useFetchProvinceQuery, useFetchWardQuery } from '@/api/address';
import { useEffect } from 'react';
import { IProvince } from '@/types/address';

export default function LoginPage() {
  const router = useRouter();

  const registerSchema = yup.object().shape({
    citizenID: yup
      .string()
      .required('Citizen ID is require')
      .matches(/^\d{9}$|^\d{12}$/, 'Citizen ID must contain 9 or 12 digits'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .required('Password is require')
      .min(8, 'Password must be at least 8 characters')
      .test('no-spaces', 'Password cannot contain spaces', (value) => !value.includes(' ')),
    fullName: yup.string().required('Name is require'),
    dateOfBirth: yup.mixed<Dayjs>().required('Date of birth is invalid'),
    gender: yup.string().required('Gender is require'),
    province: yup.string().required('Province is require'),
    district: yup.string().required('District is require'),
    ward: yup.string().required('Ward is require')
  });
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid }
  } = useForm<IUserRegisterForm>({
    mode: 'onChange',
    defaultValues: {
      citizenID: '',
      email: '',
      password: '',
      fullName: '',
      dateOfBirth: dayjs(),
      gender: '',
      province: '',
      district: '',
      ward: ''
    },
    resolver: yupResolver(registerSchema)
  });
  const watchProvince = watch('province');
  const watchDistrict = watch('district');

  const { data: provinces } = useFetchProvinceQuery();
  const { data: districts } = useFetchDistrictQuery({
    provinceId: watchProvince
  });
  const { data: wards } = useFetchWardQuery({
    districtId: watchDistrict
  });

  const onSubmit = async (values: IUserRegisterForm) => {
    console.log('>>> Check data: ', values);
  };
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '84px 32px',
        gap: '24px'
      }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: '600'
        }}
      >
        Đăng ký tài khoản
      </Typography>

      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '400px'
        }}
      >
        <Box sx={{ width: '100%' }}>
          <FormLabel
            sx={{
              color: '#000',
              '&::after': {
                content: '" (*)"',
                color: 'red'
              }
            }}
          >
            Số CMND/CCCD
          </FormLabel>
          <TextField
            {...register('citizenID')}
            id="citizenId"
            type="text"
            placeholder="Số CMND/CCCD"
            variant="outlined"
            error={!!errors.citizenID?.message}
            helperText={errors.citizenID?.message}
            sx={{
              width: '100%',
              marginTop: '6px'
            }}
          />
        </Box>
        <Box sx={{ width: '100%' }}>
          <FormLabel
            sx={{
              color: '#000',
              '&::after': {
                content: '" (*)"',
                color: 'red'
              }
            }}
          >
            Email
          </FormLabel>
          <TextField
            {...register('email')}
            id="email"
            type="email"
            placeholder="user@gmail.com"
            variant="outlined"
            error={!!errors.email?.message}
            helperText={errors.email?.message}
            sx={{
              width: '100%',
              marginTop: '6px'
            }}
          />
        </Box>
        <Box sx={{ width: '100%' }}>
          <FormLabel
            sx={{
              color: '#000',
              '&::after': {
                content: '" (*)"',
                color: 'red'
              }
            }}
          >
            Mật khẩu
          </FormLabel>
          <TextField
            {...register('password')}
            id="password"
            type="password"
            placeholder="password"
            variant="outlined"
            error={!!errors.password?.message}
            helperText={errors.password?.message}
            sx={{
              width: '100%',
              marginTop: '6px'
            }}
          />
        </Box>
        <Box sx={{ width: '100%' }}>
          <FormLabel
            sx={{
              color: '#000',
              '&::after': {
                content: '" (*)"',
                color: 'red'
              }
            }}
          >
            Họ và tên
          </FormLabel>
          <TextField
            {...register('fullName')}
            id="name"
            type="text"
            placeholder="Họ và tên"
            variant="outlined"
            error={!!errors.fullName?.message}
            helperText={errors.fullName?.message}
            sx={{
              width: '100%',
              marginTop: '6px'
            }}
          />
        </Box>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <FormLabel
            sx={{
              color: '#000',
              '&::after': {
                content: '" (*)"',
                color: 'red'
              }
            }}
          >
            Ngày sinh
          </FormLabel>
          <Controller
            name="dateOfBirth"
            control={control}
            render={({ field, fieldState }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker disableFuture {...field} format="DD/MM/YYYY" />
              </LocalizationProvider>
            )}
          />
        </Box>

        <Box sx={{ width: '100%' }}>
          <FormLabel
            sx={{
              color: '#000',
              '&::after': {
                content: '" (*)"',
                color: 'red'
              }
            }}
          >
            Giới tính
          </FormLabel>
          <TextField
            {...register('gender')}
            id="date"
            type="text"
            placeholder="Giới tính"
            variant="outlined"
            error={!!errors.gender?.message}
            helperText={errors.gender?.message}
            sx={{
              width: '100%',
              marginTop: '6px'
            }}
          />
        </Box>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <FormLabel
            sx={{
              color: '#000',
              '&::after': {
                content: '" (*)"',
                color: 'red'
              }
            }}
          >
            Tỉnh/Thành phố
          </FormLabel>
          <Controller
            control={control}
            name="province"
            render={({ field }) => (
              <FormControl>
                <Select id="city" {...field} error={!!errors.province?.message}>
                  {provinces &&
                    provinces.results.map((province) => (
                      <MenuItem key={province.province_id} value={province.province_id}>
                        {province.province_name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            )}
          />
        </Box>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <FormLabel
            sx={{
              color: '#000',
              '&::after': {
                content: '" (*)"',
                color: 'red'
              }
            }}
          >
            Quận/Huyện
          </FormLabel>
          <Controller
            control={control}
            name="district"
            render={({ field }) => (
              <FormControl>
                <Select id="city" {...field} error={!!errors.province?.message}>
                  {districts &&
                    districts.results.map((district) => (
                      <MenuItem key={district.district_id} value={district.district_id}>
                        {district.district_name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            )}
          />
        </Box>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <FormLabel
            sx={{
              color: '#000',
              '&::after': {
                content: '" (*)"',
                color: 'red'
              }
            }}
          >
            Xã/Phường
          </FormLabel>
          <Controller
            control={control}
            name="ward"
            render={({ field }) => (
              <FormControl>
                <Select id="ward" {...field} error={!!errors.province?.message}>
                  {wards &&
                    wards.results.map((ward) => (
                      <MenuItem key={ward.ward_id} value={ward.ward_id}>
                        {ward.ward_name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            )}
          />
        </Box>
        <Box
          sx={{
            width: '100%',
            paddingBottom: '100px',
            display: 'flex',
            justifyContent: 'end'
          }}
        >
          <Button
            disabled={!isValid}
            type="submit"
            variant="outlined"
            sx={{
              color: 'blue'
            }}
          >
            Tiếp tục
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
