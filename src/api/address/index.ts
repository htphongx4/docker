import { IDistrictResponse, IProvinceResponse, IWardResponse } from '@/types/address';
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const addressApi = createApi({
  reducerPath: 'addressApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://vapi.vnappmob.com/api'
  }),
  endpoints: (builder) => ({
    fetchProvince: builder.query<IProvinceResponse, void>({
      query: () => ({
        url: '/province',
        method: 'GET'
      })
    }),
    fetchDistrict: builder.query<IDistrictResponse, { provinceId: string | number }>({
      query: ({ provinceId }) => ({
        url: `/province/district/${provinceId}`,
        method: 'GET'
      })
    }),
    fetchWard: builder.query<IWardResponse, { districtId: string | number }>({
      query: ({ districtId }) => ({
        url: `province/ward/${districtId}`,
        method: 'GET'
      })
    })
  })
});

export const { useFetchProvinceQuery, useFetchDistrictQuery, useFetchWardQuery } = addressApi;
