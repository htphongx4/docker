import VaccinationResultTable from '@/components/account/VaccinationResultTable';

export interface IVaccinationResultData {
  id: number;
  fullName: string;
  dob: string;
  gender: string;
  citizenID: string;
  status: string;
}

const vaccinationData: IVaccinationResultData[] = [
  {
    id: 1,
    fullName: 'Nguyễn Văn A',
    dob: '6/10/1994',
    gender: 'Nam',
    citizenID: '030012345678',
    status: 'Đăng ký thành công'
  },
  {
    id: 2,
    fullName: 'Nguyễn Văn A',
    dob: '6/10/1994',
    gender: 'Nam',
    citizenID: '030012345678',
    status: 'Đăng ký thành công'
  }
];
export default function VaccineRegistrationResult() {
  return <VaccinationResultTable data={vaccinationData} />;
}
