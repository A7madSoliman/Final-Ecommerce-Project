import axiosInstance from "./axiosInstance";

export const getCart = () => axiosInstance.get("/cart");

export const addToCart = (productId: string) =>
  axiosInstance.post("/cart", { productId });

export const updateCartItem = (id: string, count: number) =>
  axiosInstance.put(`/cart/${id}`, { count });

export const removeCartItem = (id: string) =>
  axiosInstance.delete(`/cart/${id}`);

export const clearCart = () => axiosInstance.delete("/cart");
