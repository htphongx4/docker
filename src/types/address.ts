export interface IProvince {
  province_id: string | number;
  province_name: string;
  province_type?: string;
}
export interface IProvinceResponse {
  results: IProvince[];
}

export interface IDistrict {
  district_id: string | number;
  district_name: string;
  district_type?: string;
}
export interface IDistrictResponse {
  results: IDistrict[];
}

export interface IWard {
  ward_id: string | number;
  ward_name: string;
  ward_type?: string;
}
export interface IWardResponse {
  results: IWard[];
}

export interface IProvinceForm {
  province: string;
  district: string;
  ward: string;
}
