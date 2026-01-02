import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../Api/cart.api";

export default function useAddToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error) => console.error("Add to cart failed:", error),
  });
}
