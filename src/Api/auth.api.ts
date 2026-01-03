import axios from "axios";

const BASE_URL = "https://ecommerce.routemisr.com/api/v1";

export interface SignupPayLoad {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
}

export const signUp = async (data: SignupPayLoad) => {
  const response = await axios.post(`${BASE_URL}/auth/signup`, data);

  return response.data;
};
