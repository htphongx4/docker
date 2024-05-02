import { FC, useEffect, useState } from 'react';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { useFetchDistrictQuery, useFetchProvinceQuery, useFetchWardQuery } from '@/api/address';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { InjectionPoints } from '@/mockData/ InjectionPoints';
import { IProvinceForm } from '@/types/address';
import { SearchVaccinationPoints } from '@/utils/SearchVaccinationPoints';
import VaccinationPointTable, { Column } from '@/components/home/VaccinationPointTable';

const columns: Column[] = [
  { id: 'id', label: 'STT' },
  { id: 'name', label: 'Tên điểm tiêm', align: 'center', minWidth: 170 },
  { id: 'street', label: 'Số nhà, tên đường', align: 'center' },
  { id: 'ward', label: 'Xã/Phường', align: 'center' },
  { id: 'district', label: 'Quận/Huyện', align: 'center' },
  { id: 'province', label: 'Tỉnh/Thành phố', align: 'center' },
  { id: 'leader', label: 'Người đứng đầu cơ sở tiêm chủng', align: 'center' },
  { id: 'table_number', label: 'Số bàn tiêm', align: 'center' }
];

const VaccinationPoint: FC = () => {
  const [injectionPointsData, setInjectionPointsData] = useState(InjectionPoints);

  const registerSchema = yup.object().shape({
    province: yup.string().required('Province is require'),
    district: yup.string().required('District is require'),
    ward: yup.string().required('Ward is require')
  });
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid }
  } = useForm<IProvinceForm>({
    mode: 'onChange',
    defaultValues: {
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
  const { data: wards, refetch: refetchWard } = useFetchWardQuery({
    districtId: watchDistrict
  });

  const onSubmit = async (values: IProvinceForm) => {
    setInjectionPointsData(SearchVaccinationPoints(InjectionPoints, values));
  };

  return (
    <Box sx={{ boxShadow: 0, p: '36px' }}>
      <Box
        sx={{
          padding: '24px 16px',
          borderRadius: '8px',
          boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px'
        }}
      >
        <Typography
          sx={{ fontSize: '20px', fontWeight: '500', lineHeight: '160%', padding: '10px' }}
        >
          Tra cứu điểm tiêm theo địa bàn
        </Typography>
        <Stack py={2}>
          <Box
            onSubmit={handleSubmit(onSubmit)}
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '24px',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}
          >
            <Controller
              control={control}
              name="province"
              render={({ field }) => (
                <FormControl sx={{ width: '260px' }} size="small">
                  <InputLabel id="demo-simple-select-label">Tỉnh/Thành phố</InputLabel>
                  <Select
                    id="province"
                    label="Tỉnh/Thành phố"
                    {...field}
                    error={!!errors.province?.message}
                  >
                    {provinces &&
                      provinces.results.map((province, index) => (
                        <MenuItem key={index} value={province.province_id}>
                          {province.province_name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              )}
            />
            <Controller
              control={control}
              name="district"
              render={({ field }) => (
                <FormControl sx={{ width: '260px' }} size="small" disabled={!watchProvince}>
                  <InputLabel id="demo-simple-select-label">Quận/Huyện</InputLabel>
                  <Select
                    id="district"
                    label="Quận/Huyện"
                    {...field}
                    error={!!errors.district?.message}
                  >
                    {districts &&
                      districts.results.map((district, index) => (
                        <MenuItem key={index} value={district.district_id}>
                          {district.district_name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              )}
            />
            <Controller
              control={control}
              name="ward"
              render={({ field }) => (
                <FormControl
                  sx={{ width: '260px' }}
                  size="small"
                  disabled={!watchProvince || !watchDistrict}
                >
                  <InputLabel id="demo-simple-select-label">Xã/Phường</InputLabel>
                  <Select id="ward" label="Xã/Phường" {...field} error={!!errors.province?.message}>
                    {wards &&
                      wards.results.map((ward, index) => (
                        <MenuItem key={index} value={ward.ward_id}>
                          {ward.ward_name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              )}
            />
            <Box>
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
                <SearchIcon />
                Tìm kiếm
              </Button>
            </Box>
          </Box>
        </Stack>
        <VaccinationPointTable columns={columns} data={injectionPointsData} />
      </Box>
    </Box>
  );
};

export default VaccinationPoint;
