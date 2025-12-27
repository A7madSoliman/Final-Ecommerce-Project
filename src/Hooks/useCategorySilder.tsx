import getCategorieSlider from "../Api/categories.api";
import { useQuery } from "@tanstack/react-query";
import type { CategorySlidersResponse } from "../Api/categories.api";

export default function useCategorySilder() {
  return useQuery<CategorySlidersResponse>({
    queryKey: ["categories"],
    queryFn: getCategorieSlider,
    staleTime: 10 * 60 * 1000, // 5 minutes
  });
}
