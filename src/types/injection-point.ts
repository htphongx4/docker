import { IDistrict, IProvince, IWard } from '@/types/address';

export interface ISearchInjectionPointForm {
  injectionPoint: string;
  address: string;
}

export interface IInjectionPointColumn {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'center';
}

export interface IInjectionPoint {
  id: string | number;
  name: string;
  street: string;
  ward?: IWard;
  district?: IDistrict;
  province?: IProvince;
  leader: string;
  table_number: number;
}

export interface IEditInjectionPointForm {
  id?: string | number;
  name: string;
  street: string;
  ward?: IWard;
  district?: IDistrict;
  province?: IProvince;
  leader: string;
  table_number: number;
}
