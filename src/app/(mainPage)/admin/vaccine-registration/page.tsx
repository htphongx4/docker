'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, Paper, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import SearchIcon from '@mui/icons-material/Search';
import * as yup from 'yup';
import { useState } from 'react';
import { vaccineRegistrationData } from '@/mockData/vaccineRegistrationData';
import VaccineRegistrationTable from '@/components/admin/vaccine-registration/VaccineRegistrationTable';
import EditModal from '@/components/admin/vaccine-registration/EditModal';
import { ISearchVaccineRegistrationForm, IVaccineRegistrationColumn } from '@/types/vaccine';

const columns: IVaccineRegistrationColumn[] = [
  { id: 'name', label: 'Họ tên' },
  { id: 'hic', label: 'Số thẻ bảo hiểm y tế', align: 'center', minWidth: 170 },
  { id: 'groupPriority', label: 'Nhóm ưu tiên', align: 'center' },
  { id: 'appointmentDate', label: 'Ngày tiêm', align: 'center' },
  { id: 'session', label: 'Buổi tiêm', align: 'center' },
  { id: 'status', label: 'Trạng thái', align: 'center' }
];

export default function InjectionPoint() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(vaccineRegistrationData);
  const searchSchema = yup.object().shape({
    fullName: yup.string().required('Require'),
    hic: yup.string().required('Require')
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<ISearchVaccineRegistrationForm>({
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      hic: ''
    },
    resolver: yupResolver(searchSchema)
  });

  const onSubmit = async (values: ISearchVaccineRegistrationForm) => {
    console.log('checkdate >>', values);
  };

  return (
    <Container maxWidth="xl">
      <EditModal open={open} setOpen={setOpen} />
      <Stack direction="column" spacing={2} pt={2}>
        <Stack component="form" direction="row" spacing={2} onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <TextField
              {...register('fullName')}
              id="fullName"
              type="text"
              placeholder="Họ và tên"
              variant="outlined"
              error={!!errors.fullName?.message}
              helperText={errors.fullName?.message}
              size="small"
              sx={{
                width: '260px'
              }}
            />
          </Stack>
          <Stack>
            <TextField
              {...register('hic')}
              id="hic"
              type="text"
              placeholder="Số thẻ BHYT"
              variant="outlined"
              error={!!errors.hic?.message}
              helperText={errors.hic?.message}
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
          <VaccineRegistrationTable columns={columns} data={data} onEdit={setOpen} />
        </Stack>
      </Stack>
    </Container>
  );
}
