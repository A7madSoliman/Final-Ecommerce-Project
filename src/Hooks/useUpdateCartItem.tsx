import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateCartItem } from "../Api/cart.api";

export default function useUpdateCartItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, count }: { id: string; count: number }) =>
      updateCartItem(id, count),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
}
