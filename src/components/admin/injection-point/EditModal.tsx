import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, FormLabel, Paper, Stack, TextField } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/Close';
import { IEditInjectionPointForm } from '@/types/injection-point';

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
  const editInjectionPointSchema = yup.object().shape({
    name: yup.string().required('Require'),
    street: yup.string().required('Require'),
    leader: yup.string().required('Require'),
    table_number: yup.number().required('Require')
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IEditInjectionPointForm>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      street: '',
      leader: '',
      table_number: 0
    },
    resolver: yupResolver(editInjectionPointSchema)
  });

  const onSubmit = async (values: IEditInjectionPointForm) => {
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
                Cập nhật điểm tiêm
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
                  Điểm tiêm
                </FormLabel>
                <TextField
                  {...register('name')}
                  id="namePoint"
                  type="text"
                  placeholder="Điểm tiêm"
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
                  Địa chỉ
                </FormLabel>
                <TextField
                  {...register('street')}
                  id="street"
                  type="text"
                  placeholder="Địa chỉ"
                  variant="outlined"
                  error={!!errors.street?.message}
                  helperText={errors.street?.message}
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
                  Người đứng đầu cơ sở
                </FormLabel>
                <TextField
                  {...register('leader')}
                  id="leader"
                  type="text"
                  placeholder="Người đứng đầu cơ sở"
                  variant="outlined"
                  error={!!errors.leader?.message}
                  helperText={errors.leader?.message}
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
                  Số bàn tiêm
                </FormLabel>
                <TextField
                  {...register('table_number')}
                  id="table_number"
                  type="text"
                  placeholder="Số bàn tiêm"
                  variant="outlined"
                  error={!!errors.table_number?.message}
                  helperText={errors.table_number?.message}
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
