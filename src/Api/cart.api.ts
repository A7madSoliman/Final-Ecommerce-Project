import axiosInstance from "./axiosInstance";

export interface CartItem {
  id: string;
  productId: string;
  count: number;
  price: number;
}

export interface CartResponse {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}
export interface AddToCartPayLoad {
  productId: string;
  count: number;
}

export interface UpdateCartItemPayLoad {
  id: string;
  count: number;
}

export const getCart = () => axiosInstance.get<CartResponse>("/cart");

export const addToCart = (data: AddToCartPayLoad) =>
  axiosInstance.post("/cart", { productId: data.productId, count: data.count });

export const updateCartItem = (id: string, count: number) =>
  axiosInstance.put(`/cart/${id}`, { count });

export const removeCartItem = (id: string) =>
  axiosInstance.delete(`/cart/${id}`);

export const clearCart = () => axiosInstance.delete("/cart");
