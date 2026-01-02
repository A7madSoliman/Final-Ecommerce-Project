import { useQueryClient, useMutation } from "@tanstack/react-query";
import { clearCart } from "../Api/cart.api";

export default function useClearCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => clearCart(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
}
