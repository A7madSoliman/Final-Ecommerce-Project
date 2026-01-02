import { useQueryClient, useMutation } from "@tanstack/react-query";
import { removeCartItem } from "../Api/cart.api";

export default function useRemoveCartItems() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => removeCartItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
}
