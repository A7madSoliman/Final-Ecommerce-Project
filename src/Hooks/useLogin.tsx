import toast from "react-hot-toast";
import { login, type LoginPayLoad } from "../Api/auth.api";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const { login: saveToken } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginPayLoad) => login(data),

    onSuccess: (data) => {
      toast.success(data.message);
      saveToken(data.token);
      navigate("/");
    },

    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Login failed");
    },
  });
}
