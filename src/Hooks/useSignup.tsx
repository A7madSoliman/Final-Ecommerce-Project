import toast from "react-hot-toast";
import { signUp, type SignupPayLoad } from "../Api/auth.api";
import { useMutation } from "@tanstack/react-query";

export default function useSignup() {
  return useMutation({
    mutationFn: (data: SignupPayLoad) => signUp(data),

    onSuccess: (data) => {
      toast.success(data.message);
    },

    onError: (error: any) => {
      toast.error(error.response.data.message || "Signup failed");
    },
  });
}
