import axios from "axios";

export interface Product {
  _id: string;
  title: string;
  imageCover: string;
  price: number;
  priceAfterDiscount: number;
  category: {
    name: string;
  };
  productName: string;
  ratingsAverage: number;
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

const getProductsCard = async (
  page: number,
  limit = 20
): Promise<ProductsResponse> => {
  const { data } = await axios.get<ProductsResponse>(
    `https://ecommerce.routemisr.com/api/v1/products?page=${page}&limit=${limit}`
  );
  return data;
};

export default getProductsCard;
