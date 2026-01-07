import toast from "react-hot-toast";
import {
  addToCart,
  clearCart,
  getCart,
  removeFromCart,
  updateCartItems,
} from "../Api/cart.api";
import { useAuth } from "../Context/AuthContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { CartResponse, UpdateCountPayLoad } from "../Types/cart.types";

export function useCart() {
  const { token } = useAuth();
  const queryClient = useQueryClient();

  //=============================
  //         Get Cart
  //=============================

  const cartQuery = useQuery<CartResponse>({
    queryKey: ["cart"],
    queryFn: () => getCart(token!).then((res) => res.data),
    enabled: !!token,
    retry: false,
  });

  //=============================
  //         Add Product
  //=============================

  const addMutation = useMutation({
    mutationFn: (productId: string) => addToCart(token!, productId),
    onSuccess: () => {
      toast.success("Product Addes To Cart");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  //=============================
  //         Remove Product
  //=============================

  const removeMutation = useMutation({
    mutationFn: (productId: string) => removeFromCart(token!, productId),
    onSuccess: () => {
      toast.success("Product Removed From Cart");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  //=============================
  //         Update Product
  //=============================

  const updateMutation = useMutation({
    mutationFn: ({ productId, count }: UpdateCountPayLoad) =>
      updateCartItems(token!, productId, count),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  //=============================
  //         Clear Cart
  //=============================

  const clearMutation = useMutation({
    mutationFn: () => clearCart(token!),
    onSuccess: () => {
      toast.success("Cart Cleared");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return {
    //=============================
    //         DATA & ACTIONS
    //=============================

    cart: cartQuery.data,
    isError: cartQuery.isError,
    isLoading: cartQuery.isLoading,
    isAdding: addMutation.isPending,
    isFetching: cartQuery.isFetching,
    addToCart: addMutation.mutate,
    removeFromCart: removeMutation.mutate,
    updateCart: updateMutation.mutate,
    clearCart: clearMutation.mutate,
  };
}
