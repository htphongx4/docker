import { setCookie, deleteCookie } from 'cookies-next';
import { createSlice } from '@reduxjs/toolkit';
import { ILoginResponse } from '@/types/auth';
import { authApi } from '@/api/auth';
import { AppState } from '@/lib/store';

const initialState: ILoginResponse = {
  // id: '',
  email: '',
  token: '',
  userName: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (_state, { payload }) => {
      const expire = new Date().getTime() + 1000 * 24 * 60 * 60;
      // set the token in the cookies
      setCookie('authorization', payload.token, {
        path: '/',
        expires: new Date(expire)
      });
      return payload;
    });
  }
});

export const selectAuthData = (state: AppState) => state.auth;

export default authSlice.reducer;
