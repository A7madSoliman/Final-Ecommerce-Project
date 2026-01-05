import toast from "react-hot-toast";
import { forgetPassword, type ForgetPasswordPayLoad } from "../Api/auth.api";
import { useMutation } from "@tanstack/react-query";

export default function useForgetPassword() {
  return useMutation({
    mutationFn: (data: ForgetPasswordPayLoad) => forgetPassword(data),

    onSuccess: (data) => {
      toast.success(data.message);
      console.log(data.message);
    },

    onError: (error: any) => {
      toast.error(error?.response?.data.message || "Failed to send reset link");
    },
  });
}
