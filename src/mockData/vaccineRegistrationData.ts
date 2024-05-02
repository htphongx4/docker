export interface IVaccineRegistrationData {
  id?: string | number;
  name: string;
  hic?: string;
  citizenId?: string;
  groupPriority?: string;
  appointmentDate: string;
  session: string;
  status: string;
}

export const vaccineRegistrationData: IVaccineRegistrationData[] = [
  {
    id: 1,
    name: 'Nguyen Van A',
    hic: '0293209323942',
    groupPriority: 'Dưới 12 tuổi',
    appointmentDate: '24/04/2024',
    session: 'Sáng',
    status: 'Đã đăng ký'
  },
  {
    id: 2,
    name: 'Tran Van A',
    hic: '0293209323942',
    groupPriority: 'Dưới 12 tuổi',
    appointmentDate: '24/04/2024',
    session: 'Sáng',
    status: 'Đã xác nhận'
  },
  {
    id: 3,
    name: 'Nguyen Van F',
    hic: '0293209323942',
    groupPriority: 'Dưới 12 tuổi',
    appointmentDate: '24/04/2024',
    session: 'Sáng',
    status: 'Từ chối'
  },
  {
    id: 4,
    name: 'Nguyen Van C',
    hic: '0293209323942',
    groupPriority: 'Dưới 12 tuổi',
    appointmentDate: '24/04/2024',
    session: 'Sáng',
    status: 'Đã tiêm'
  },
  {
    id: 5,
    name: 'Nguyen Van A',
    hic: '0293209323942',
    groupPriority: 'Dưới 12 tuổi',
    appointmentDate: '24/04/2024',
    session: 'Sáng',
    status: 'Đã đăng ký'
  },
  {
    id: 6,
    name: 'Tran Van A',
    hic: '0293209323942',
    groupPriority: 'Dưới 12 tuổi',
    appointmentDate: '24/04/2024',
    session: 'Sáng',
    status: 'Đã tiêm'
  },
  {
    id: 7,
    name: 'Nguyen Van F',
    hic: '0293209323942',
    groupPriority: 'Dưới 12 tuổi',
    appointmentDate: '24/04/2024',
    session: 'Sáng',
    status: 'Đã đăng ký'
  },
  {
    id: 8,
    name: 'Nguyen Van C',
    hic: '0293209323942',
    groupPriority: 'Dưới 12 tuổi',
    appointmentDate: '24/04/2024',
    session: 'Sáng',
    status: 'Đã tiêm'
  }
];
