import axios from "axios";

export interface Subcategory {
  _id: string;
  name: string;
  category: string;
}

export interface SubcategoriesResponse {
  data: Subcategory[];
}

export const getSubcategoriesByCategory = async (
  categoryId: string
): Promise<SubcategoriesResponse> => {
  const { data } = await axios.get<SubcategoriesResponse>(
    `https://ecommerce.routemisr.com/api/v1/categories/${categoryId}/subcategories`
  );
  return data;
};
