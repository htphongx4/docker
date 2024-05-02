import { Dayjs } from 'dayjs';

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

export interface IEditVaccineRegistrationForm {
  date: Dayjs;
  session: string;
  status: string;
}

export interface ISearchVaccineRegistrationForm {
  fullName: string;
  hic: string;
}

export enum VaccineRegistrationStatus {
  Requested,
  Accepted,
  Rejected,
  Completed
}

export interface IVaccineRegistrationStatus {
  id: string | number;
  label: string;
}

export interface IVaccineRegistrationColumn {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'center';
}
