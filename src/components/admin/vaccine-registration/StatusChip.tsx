import { VaccineRegistrationStatus, IVaccineRegistrationStatus } from '@/types/vaccine';
import { Chip } from '@mui/material';
import { FC } from 'react';

interface IProp {
  status: IVaccineRegistrationStatus;
}

const StatusChip: FC<IProp> = ({ status }) => {
  const colorStatus = (status: IVaccineRegistrationStatus) => {
    switch (status.id) {
      case VaccineRegistrationStatus.Requested:
        return 'default';
      case VaccineRegistrationStatus.Accepted:
        return 'primary';
      case VaccineRegistrationStatus.Rejected:
        return 'warning';
      case VaccineRegistrationStatus.Completed:
        return 'success';
    }
  };
  return <Chip color={colorStatus(status)} label={status.label} />;
};

export default StatusChip;
