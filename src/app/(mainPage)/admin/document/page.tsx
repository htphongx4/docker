'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import SearchIcon from '@mui/icons-material/Search';
import * as yup from 'yup';
import { useState } from 'react';
import DocumentTable from '@/components/admin/document/DocumentTable';
import EditModal from '@/components/admin/document/EditModal';
import { IDocument, IDocumentColumn, ISearchDocumentForm } from '@/types/document';

const columns: IDocumentColumn[] = [
  { id: 'id', label: 'STT' },
  { id: 'name', label: 'Tên tài liệu', align: 'center' }
];

const listDocument: IDocument[] = [
  {
    id: 1,
    name: 'Document 1',
    file: 'fake_link'
  },
  {
    id: 2,
    name: 'Document 2',
    file: 'fake_link'
  },
  {
    id: 3,
    name: 'Document 3',
    file: 'fake_link'
  }
];

export default function Document() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(listDocument);
  const searchSchema = yup.object().shape({
    name: yup.string().required('Name is require')
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<ISearchDocumentForm>({
    mode: 'onChange',
    defaultValues: {
      name: ''
    },
    resolver: yupResolver(searchSchema)
  });

  const onSubmit = async (values: ISearchDocumentForm) => {
    console.log('checkdate >>', values);
  };

  return (
    <Container maxWidth="xl">
      <EditModal open={open} setOpen={setOpen} />
      <Stack direction="column" spacing={2} pt={2}>
        <Stack component="form" direction="row" spacing={2} onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <TextField
              {...register('name')}
              id="name"
              type="text"
              placeholder="Nhập tên tài liệu"
              variant="outlined"
              error={!!errors.name?.message}
              helperText={errors.name?.message}
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
          <DocumentTable columns={columns} data={data} onEdit={setOpen} />
        </Stack>
      </Stack>
    </Container>
  );
}
