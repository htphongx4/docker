'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import SearchIcon from '@mui/icons-material/Search';
import * as yup from 'yup';
import InjectionPointTable from '@/components/admin/injection-point/InjectionPointTable';
import { useState } from 'react';
import { InjectionPoints } from '@/mockData/ InjectionPoints';
import EditModal from '@/components/admin/injection-point/EditModal';
import { IInjectionPointColumn, ISearchInjectionPointForm } from '@/types/injection-point';

const columns: IInjectionPointColumn[] = [
  { id: 'id', label: 'STT' },
  { id: 'name', label: 'Tên điểm tiêm', align: 'center', minWidth: 170 },
  { id: 'street', label: 'Số nhà, tên đường', align: 'center' },
  { id: 'ward', label: 'Xã/Phường', align: 'center' },
  { id: 'table_number', label: 'Số bàn tiêm', align: 'center' }
];

export default function InjectionPoint() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(InjectionPoints);
  const searchSchema = yup.object().shape({
    injectionPoint: yup.string().required('Require'),
    address: yup.string().required('Require')
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<ISearchInjectionPointForm>({
    mode: 'onChange',
    defaultValues: {
      injectionPoint: '',
      address: ''
    },
    resolver: yupResolver(searchSchema)
  });

  const onSubmit = async (values: ISearchInjectionPointForm) => {
    console.log('checkdate >>', values);
  };

  return (
    <Container maxWidth="xl">
      <EditModal open={open} setOpen={setOpen} />
      <Stack direction="column" spacing={2} pt={2}>
        <Stack component="form" direction="row" spacing={2} onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <TextField
              {...register('injectionPoint')}
              id="ijnectionPoint"
              type="text"
              placeholder="Điểm tiêm"
              variant="outlined"
              error={!!errors.injectionPoint?.message}
              helperText={errors.injectionPoint?.message}
              size="small"
              sx={{
                width: '260px'
              }}
            />
          </Stack>
          <Stack>
            <TextField
              {...register('address')}
              id="address"
              type="text"
              placeholder="Địa chỉ"
              variant="outlined"
              error={!!errors.address?.message}
              helperText={errors.address?.message}
              size="small"
              sx={{
                width: '260px'
              }}
            />
          </Stack>
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
        </Stack>
        <Stack>
          <InjectionPointTable columns={columns} data={data} onEdit={setOpen} />
        </Stack>
      </Stack>
    </Container>
  );
}
