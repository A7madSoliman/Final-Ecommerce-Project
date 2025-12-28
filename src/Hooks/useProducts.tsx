import { getProducts, type ProductsResponse } from "../Api/products.api";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useProducts() {
  return useInfiniteQuery<ProductsResponse>({
    queryKey: ["products"],
    queryFn: ({ pageParam }) => getProducts(pageParam as number, 20),
    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages): number | undefined => {
      if (lastPage.data.length < 20) return undefined;
      return allPages.length + 1;
    },
  });
}
