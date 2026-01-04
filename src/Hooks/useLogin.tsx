import toast from "react-hot-toast";
import { login, type LoginPayLoad } from "../Api/auth.api";
import { useMutation } from "@tanstack/react-query";

export default function useLogin() {
  return useMutation({
    mutationFn: (data: LoginPayLoad) => login(data),

    onSuccess: (data) => {
      toast.success(data.message);
    },

    onError: (error: any) => {
      toast.error(error.response.data.message || "Login failed");
    },
  });
}
