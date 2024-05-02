import { IInjectionPoint } from '@/mockData/ InjectionPoints';
import { IProvinceForm } from '@/types/address';

export const SearchVaccinationPoints = (data: IInjectionPoint[], condition: IProvinceForm) => {
  return data.filter(
    (point) =>
      point.province?.province_id === condition.province &&
      point.district?.district_id === condition.district &&
      point.ward?.ward_id === condition.ward
  );
};
