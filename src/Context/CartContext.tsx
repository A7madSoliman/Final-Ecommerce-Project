import { createContext, useContext } from "react";
import useCart from "../Hooks/useCart";
import useAddToCart from "../Hooks/useAddToCart";
import useUpdateCartItem from "../Hooks/useUpdateCartItem";
import useRemoveCartItems from "../Hooks/useRemoveCartItems";
import useClearCart from "../Hooks/useClearCart";
import toast from "react-hot-toast";

import type { CartResponse, AddToCartPayLoad } from "../Api/cart.api";

interface CartContextType {
  cart?: CartResponse;
  isLoading: boolean;
  addToCart: (data: AddToCartPayLoad) => void;
  updateCartItem: (data: { id: string; count: number }) => void;
  removeCartItems: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const cartQuery = useCart();
  const add = useAddToCart();
  const update = useUpdateCartItem();
  const remove = useRemoveCartItems();
  const clear = useClearCart();

  return (
    <CartContext.Provider
      value={{
        cart: cartQuery.data?.data,
        isLoading: cartQuery.isLoading,
        addToCart: (data) => {
          add.mutate(data, {
            onSuccess: () => toast.success("Product added to cart ✅"),
            onError: () => toast.error("Failed to add product ❌"),
          });
        },
        updateCartItem: (data) => {
          update.mutate(data, {
            onSuccess: () => toast.success("Quantity updated 👍"),
            onError: () => toast.error("Failed to update quantity ❌"),
          });
        },
        removeCartItems: (id) => {
          remove.mutate(id, {
            onSuccess: () => toast.success("Item removed from cart 🗑️"),
            onError: () => toast.error("Failed to remove item ❌"),
          });
        },
        clearCart: () => {
          clear.mutate(undefined, {
            onSuccess: () => toast.success("Cart cleared 🧹"),
            onError: () => toast.error("Failed to clear cart ❌"),
          });
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within CartProvider");
  }
  return context;
};
