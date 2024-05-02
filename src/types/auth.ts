import { Dayjs } from 'dayjs';
export interface IForgotPasswordForm {
  email: string;
}
export interface IUserLoginForm {
  email: string;
  password: string;
}
export interface ILoginResponse {
  // id: string;
  token: string;
  email: string;
  userName: string;
}
export interface IUser {
  id: string;
  userName?: string;
  email: string;
}
export interface IUserRegisterForm {
  citizenID: string;
  email: string;
  password: string;
  fullName: string;
  dateOfBirth: Dayjs;
  gender: string;
  province: string;
  district: string;
  ward: string;
}
