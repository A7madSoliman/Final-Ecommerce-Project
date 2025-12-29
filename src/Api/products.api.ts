import axios from "axios";

export interface Product {
  _id: string;
  title: string;
  description: string;
  imageCover: string;
  images: string[];
  price: number;
  priceAfterDiscount?: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  category: {
    _id: string;
    name: string;
  };
}

export interface ProductCardProps {
  id: string;
  image: string;
  category: string;
  name: string;
  price: number;
  priceAfterDiscount?: number;
  ratingsAverage?: number;
}

export interface ProductsResponse {
  data: Product[];
  results: number;
}

export interface ProductResponse {
  data: Product;
}

interface GetFilteredProductsParams {
  page: number;
  limit?: number;
  categoryId?: string;
  subcategoryId?: string;
}

// Get products with optional category filter
export const getProducts = async (
  page: number,
  limit = 20,
  categoryId?: string
): Promise<ProductsResponse> => {
  const url = categoryId
    ? `https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoryId}&page=${page}&limit=${limit}`
    : `https://ecommerce.routemisr.com/api/v1/products?page=${page}&limit=${limit}`;

  const { data } = await axios.get<ProductsResponse>(url);
  return data;
};

// Get filtered products
export const getFilteredProducts = async ({
  page,
  limit = 20,
  categoryId,
  subcategoryId,
}: GetFilteredProductsParams): Promise<ProductsResponse> => {
  const params = new URLSearchParams();

  params.append("page", page.toString());
  params.append("limit", limit.toString());

  if (categoryId) {
    params.append("category[in]", categoryId);
  }

  if (subcategoryId) {
    params.append("subcategory[in]", subcategoryId);
  }

  const { data } = await axios.get<ProductsResponse>(
    `https://ecommerce.routemisr.com/api/v1/products?${params.toString()}`
  );

  return data;
};

// Get product by ID
export const getProductById = async (id: string): Promise<ProductResponse> => {
  const { data } = await axios.get<ProductResponse>(
    `https://ecommerce.routemisr.com/api/v1/products/${id}`
  );
  return data;
};
