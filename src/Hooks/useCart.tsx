import { getCart } from "../Api/cart.api";
import { useQuery } from "@tanstack/react-query";

export default function useCart() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
