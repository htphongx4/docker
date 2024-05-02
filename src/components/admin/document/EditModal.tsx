import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, FormLabel, Paper, Stack, TextField } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/Close';
import { IEditDocumentForm } from '@/types/document';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  p: 2
};

const EditModal: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }) => {
  const editDocumentSchema = yup.object().shape({
    name: yup.string().required('Require'),
    file: yup.string().required('Require')
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IEditDocumentForm>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      file: ''
    },
    resolver: yupResolver(editDocumentSchema)
  });

  const onSubmit = async (values: IEditDocumentForm) => {
    console.log('checkdate >>', values);
  };

  const onClose = () => setOpen(false);
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Paper elevation={6} sx={style}>
          <Stack direction="column" spacing={2}>
            <Stack direction="row" justifyContent="space-between">
              <Typography fontSize={20} fontWeight={500}>
                Cập nhật tài liệu
              </Typography>
              <Button onClick={onClose}>
                <CloseIcon />
              </Button>
            </Stack>
            <Divider />
            <Stack
              component="form"
              direction="column"
              spacing={2}
              onSubmit={handleSubmit(onSubmit)}
              alignItems="center"
            >
              <Stack spacing={1}>
                <FormLabel
                  sx={{
                    color: '#000'
                  }}
                >
                  Tên tài liệu
                </FormLabel>
                <TextField
                  {...register('name')}
                  id="namePoint"
                  type="text"
                  placeholder="Tên tài liệu"
                  variant="outlined"
                  error={!!errors.name?.message}
                  helperText={errors.name?.message}
                  size="small"
                  sx={{
                    width: '396px'
                  }}
                />
              </Stack>
              <Stack spacing={1}>
                <FormLabel
                  sx={{
                    color: '#000'
                  }}
                >
                  Chọn file
                </FormLabel>
                <TextField
                  {...register('file')}
                  id="file"
                  type="file"
                  variant="outlined"
                  error={!!errors.file?.message}
                  helperText={errors.file?.message}
                  size="small"
                  sx={{
                    width: '396px'
                  }}
                />
              </Stack>

              <Stack direction="row" justifyContent="flex-end" width="100%" spacing={2}>
                <Button
                  variant="outlined"
                  onClick={onClose}
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
                      opacity: '0.9'
                    },
                    '&.Mui-disabled': {
                      backgroundColor: '#fff',
                      opacity: '0.6',
                      color: '#303F9F'
                    }
                  }}
                >
                  Hủy bỏ
                </Button>
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
                  Xác nhận
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Paper>
      </Modal>
    </div>
  );
};
export default EditModal;
