import { verifyResetCode } from "../Api/auth.api";
import { useMutation } from "@tanstack/react-query";
import type { VerifyResetCodePayLoad } from "../Api/auth.api";
import toast from "react-hot-toast";
import { data } from "react-router-dom";

export default function useVerifyResetCode() {
  return useMutation({
    mutationFn: (data: VerifyResetCodePayLoad) => verifyResetCode(data),

    onSuccess: () => {
      toast.success("Code verified successfully");
      console.log(data);
    },

    onError: (error: any) => {
      toast.error(error?.response?.data.message || "Invalid reset code");
    },
  });
}
