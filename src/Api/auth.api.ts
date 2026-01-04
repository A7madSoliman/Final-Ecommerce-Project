import axios from "axios";

const BASE_URL = "https://ecommerce.routemisr.com/api/v1";

export interface SignupPayLoad {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
}

export interface LoginPayLoad {
  email: string;
  password: string;
}

export interface ForgetPasswordPayLoad {
  email: string;
}

export interface VerifyResetCodePayLoad {
  resetCode: string;
}

export interface ResetPasswordPayLoad {
  email: string;
  newPassword: string;
}

export const signUp = async (data: SignupPayLoad) => {
  const response = await axios.post(`${BASE_URL}/auth/signup`, data);

  return response.data;
};

export const login = async (data: LoginPayLoad) => {
  const response = await axios.post(`${BASE_URL}/auth/signin`, data);

  return response.data;
};

export const forgetPassword = async (data: ForgetPasswordPayLoad) => {
  const response = await axios.post(`${BASE_URL}/auth/forgotPasswords`, data);

  return response.data;
};

export const verifyResetCode = async (data: VerifyResetCodePayLoad) => {
  const response = await axios.post(`${BASE_URL}/auth/verifyResetCode`, data);
  return response.data;
};

export const resetPassword = async (data: ResetPasswordPayLoad) => {
  const response = await axios.put(`${BASE_URL}/auth/resetPassword`, data);
  return response.data;
};
