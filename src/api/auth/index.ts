import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { ILoginResponse, IUser, IUserLoginForm } from '@/types/auth';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://3448f108-a393-4277-845c-b962c2554126.mock.pstmn.io'
  }),
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, IUserLoginForm>({
      query: ({ email, password }) => ({
        url: '/login',
        method: 'POST',
        body: {
          email,
          password
        }
      })
    }),
    fetchProfile: builder.query<IUser, { token: string }>({
      query: ({ token }) => ({
        url: '/profile',
        method: 'GET'
      })
    })
  })
});

export const { useLoginMutation, useFetchProfileQuery } = authApi;
export const { login } = authApi.endpoints;
