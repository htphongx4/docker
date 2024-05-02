import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, useStore } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import commonReducer from '@/lib/features/common/commonSlice';
import authReducer from '@/lib/features/auth/authSlice';
import { authApi } from '@/api/auth';
import { addressApi } from '@/api/address';

export const makeStore = () => {
  return configureStore({
    reducer: {
      common: commonReducer,
      auth: authReducer,
      [authApi.reducerPath]: authApi.reducer,
      [addressApi.reducerPath]: addressApi.reducer
    },
    middleware: (gDM) => {
      return gDM().concat(authApi.middleware).concat(addressApi.middleware);
    }
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppStore: () => AppStore = useStore;
