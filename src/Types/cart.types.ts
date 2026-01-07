import { BookDashed } from "lucide-react";

export interface CartProduct {
  _id: string;
  title: string;
  price: number;
  count: number;
  imageCover: string;
}

export interface CartData {
  _id: string;
  products: CartProduct[];
  totalCartPrice: number;
}

export interface CartResponse {
  status: string;
  numOfCartItems: number;
  data: CartData;
}

export interface UpdateCountPayLoad {
  productId: string;
  count: number;
}
