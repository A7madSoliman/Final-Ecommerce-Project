import getProductsCard, { type ProductsResponse } from "../Api/products.api";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useProductCard() {
  return useInfiniteQuery<ProductsResponse>({
    queryKey: ["products"],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => getProductsCard(pageParam as number, 20),
    getNextPageParam: (lastPage, allPages): number | undefined => {
      if (lastPage.data.length < 20) return undefined;
      return allPages.length + 1;
    },
  });
}
