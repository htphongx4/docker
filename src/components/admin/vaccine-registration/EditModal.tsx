import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Paper,
  Select,
  Stack
} from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/Close';
import dayjs, { Dayjs } from 'dayjs';
import { sessions } from '@/utils/constants';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { IEditVaccineRegistrationForm, IVaccineRegistrationStatus } from '@/types/vaccine';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  p: 2
};

const statuses: IVaccineRegistrationStatus[] = [
  {
    id: 1,
    label: 'Đã đăng ký'
  },
  {
    id: 2,
    label: 'Đã xác nhận'
  },
  {
    id: 3,
    label: 'Từ chối'
  },
  {
    id: 4,
    label: 'Đã tiêm'
  }
];

const EditModal: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }) => {
  const editVaccineResultSchema = yup.object().shape({
    date: yup.mixed<Dayjs>().required('Require'),
    session: yup.string().required('Require'),
    status: yup.string().required('Require')
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IEditVaccineRegistrationForm>({
    mode: 'onChange',
    defaultValues: {
      date: dayjs(),
      session: '',
      status: ''
    },
    resolver: yupResolver(editVaccineResultSchema)
  });

  const onSubmit = async (values: IEditVaccineRegistrationForm) => {
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
                Cập nhật kết quả tiêm
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
              <Stack spacing={1} width="396px">
                <FormLabel sx={{ color: 'black' }}>Ngày tiêm</FormLabel>
                <Controller
                  name="date"
                  control={control}
                  render={({ field, fieldState }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker disablePast {...field} format="DD/MM/YYYY" />
                      {errors.date?.message && (
                        <FormHelperText error>{errors.date?.message}</FormHelperText>
                      )}
                    </LocalizationProvider>
                  )}
                />
              </Stack>
              <Stack spacing={1} width="396px">
                <FormLabel sx={{ color: 'black' }}>Buổi tiêm</FormLabel>
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
                            content: `"Buổi tiêm"`,
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

              <Stack spacing={1} width="396px">
                <FormLabel sx={{ color: 'black' }}>Trạng thái</FormLabel>
                <Controller
                  control={control}
                  name="status"
                  render={({ field }) => (
                    <FormControl>
                      <Select
                        id="status"
                        {...field}
                        error={!!errors.status?.message}
                        sx={{
                          '& .MuiSelect-select .notranslate::after': {
                            content: `"Trạng thái"`,
                            opacity: 0.42
                          }
                        }}
                      >
                        {statuses.map((item) => (
                          <MenuItem key={item.id} value={item.label}>
                            {item.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
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
