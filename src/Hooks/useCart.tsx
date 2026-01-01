import { getCart } from "../Api/cart.api";
import { useQuery } from "@tanstack/react-query";

export default function useCart() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });
}
