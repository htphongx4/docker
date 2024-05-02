import { IDistrict, IProvince, IWard } from '@/types/address';

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
export const InjectionPoints: IInjectionPoint[] = [
  {
    id: 1,
    name: 'Bệnh viện Đa khoa Medlatec',
    street: '11 Nghĩa Dũng',
    ward: {
      ward_id: '00001',
      ward_name: 'Phúc Xá'
    },
    district: {
      district_id: '001',
      district_name: 'Quận Ba Đình'
    },
    province: {
      province_id: '01',
      province_name: 'Thành phố Hà Nội'
    },
    leader: 'Hoàng Thu Thủy',
    table_number: 2
  },
  {
    id: 2,
    name: 'Bệnh viện Đa khoa Medlatec',
    street: '21 Nghĩa Dũng',
    ward: {
      ward_id: '09016',
      ward_name: 'Phúc Xá'
    },
    district: {
      district_id: '250',
      district_name: 'Huyện Mê Linh'
    },
    province: {
      province_id: '01',
      province_name: 'Xã Hoàng Kim'
    },
    leader: 'Hoàng Thu Thủy',
    table_number: 2
  },
  {
    id: 3,
    name: 'Bệnh viện Đa khoa Medlatec',
    street: '22 Nghĩa Dũng',
    ward: {
      ward_id: '00001',
      ward_name: 'Phúc Xá'
    },
    district: {
      district_id: '001',
      district_name: 'Quận Ba Đình'
    },
    province: {
      province_id: '01',
      province_name: 'Thành phố Hà Nội'
    },
    leader: 'Hoàng Thu Thủy',
    table_number: 2
  },
  {
    id: 4,
    name: 'Bệnh viện Đa khoa Medlatec',
    street: '32 Nghĩa Dũng',
    ward: {
      ward_id: '09016',
      ward_name: 'Phúc Xá'
    },
    district: {
      district_id: '250',
      district_name: 'Huyện Mê Linh'
    },
    province: {
      province_id: '01',
      province_name: 'Xã Hoàng Kim'
    },
    leader: 'Hoàng Thu Thủy',
    table_number: 2
  },
  {
    id: 5,
    name: 'Bệnh viện Đa khoa Medlatec',
    street: '42-44 Nghĩa Dũng',
    ward: {
      ward_id: '00001',
      ward_name: 'Phúc Xá'
    },
    district: {
      district_id: '001',
      district_name: 'Quận Ba Đình'
    },
    province: {
      province_id: '01',
      province_name: 'Thành phố Hà Nội'
    },
    leader: 'Hoàng Thu Thủy',
    table_number: 2
  },
  {
    id: 6,
    name: 'Bệnh viện Đa khoa Medlatec',
    street: '33 Nghĩa Dũng',
    ward: {
      ward_id: '09016',
      ward_name: 'Phúc Xá'
    },
    district: {
      district_id: '250',
      district_name: 'Huyện Mê Linh'
    },
    province: {
      province_id: '01',
      province_name: 'Xã Hoàng Kim'
    },
    leader: 'Hoàng Thu Thủy',
    table_number: 2
  },
  {
    id: 7,
    name: 'Bệnh viện Đa khoa Medlatec',
    street: '88 Nghĩa Dũng',
    ward: {
      ward_id: '00001',
      ward_name: 'Phúc Xá'
    },
    district: {
      district_id: '001',
      district_name: 'Quận Ba Đình'
    },
    province: {
      province_id: '01',
      province_name: 'Thành phố Hà Nội'
    },
    leader: 'Hoàng Thu Thủy',
    table_number: 2
  },
  {
    id: 8,
    name: 'Bệnh viện Đa khoa Medlatec',
    street: '56 Nghĩa Dũng',
    ward: {
      ward_id: '09016',
      ward_name: 'Phúc Xá'
    },
    district: {
      district_id: '250',
      district_name: 'Huyện Mê Linh'
    },
    province: {
      province_id: '01',
      province_name: 'Xã Hoàng Kim'
    },
    leader: 'Hoàng Thu Thủy',
    table_number: 2
  },
  {
    id: 9,
    name: 'Bệnh viện Đa khoa Medlatec',
    street: '43 Nghĩa Dũng',
    ward: {
      ward_id: '00001',
      ward_name: 'Phúc Xá'
    },
    district: {
      district_id: '001',
      district_name: 'Quận Ba Đình'
    },
    province: {
      province_id: '01',
      province_name: 'Thành phố Hà Nội'
    },
    leader: 'Hoàng Thu Thủy',
    table_number: 2
  },
  {
    id: 10,
    name: 'Bệnh viện Đa khoa Medlatec',
    street: '42-44 Nghĩa Dũng',
    ward: {
      ward_id: '09016',
      ward_name: 'Phúc Xá'
    },
    district: {
      district_id: '250',
      district_name: 'Huyện Mê Linh'
    },
    province: {
      province_id: '01',
      province_name: 'Xã Hoàng Kim'
    },
    leader: 'Hoàng Thu Thủy',
    table_number: 2
  },
  {
    id: 11,
    name: 'Bệnh viện Đa khoa Medlatec',
    street: '42-44 Nghĩa Dũng',
    ward: {
      ward_id: '00001',
      ward_name: 'Phúc Xá'
    },
    district: {
      district_id: '001',
      district_name: 'Quận Ba Đình'
    },
    province: {
      province_id: '01',
      province_name: 'Thành phố Hà Nội'
    },
    leader: 'Hoàng Thu Thủy',
    table_number: 2
  },
  {
    id: 12,
    name: 'Bệnh viện Đa khoa Medlatec',
    street: '42-44 Nghĩa Dũng',
    ward: {
      ward_id: '09016',
      ward_name: 'Phúc Xá'
    },
    district: {
      district_id: '250',
      district_name: 'Huyện Mê Linh'
    },
    province: {
      province_id: '01',
      province_name: 'Xã Hoàng Kim'
    },
    leader: 'Hoàng Thu Thủy',
    table_number: 2
  }
];
