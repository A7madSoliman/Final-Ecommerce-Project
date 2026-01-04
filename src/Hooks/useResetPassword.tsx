import toast from "react-hot-toast";
import { resetPassword, type ResetPasswordPayLoad } from "../Api/auth.api";
import { useMutation } from "@tanstack/react-query";

export default function useResetPassword() {
  return useMutation({
    mutationFn: (data: ResetPasswordPayLoad) => resetPassword(data),

    onSuccess: () => {
      toast.success("Password reset successfully");
    },

    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Failed to reset password");
    },
  });
}
