import { useCartContext } from "../../../Context/CartContext";

export default function CartSummary() {
  const { cart, clearCart } = useCartContext();

  if (!cart || cart.items.length === 0) return null;

  return (
    <div className="p-6 bg-white rounded-lg shadow flex flex-col gap-6">
      <h2 className="text-xl font-bold">Cart Summary</h2>

      <div className="flex justify-between text-gray-700">
        <span>Total Items:</span>
        <span>{cart.totalItems}</span>
      </div>

      <div className="flex justify-between text-gray-700">
        <span>Total Price:</span>
        <span className="font-semibold text-green-600">
          {cart.totalPrice} L.E
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={() => clearCart()}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Clear Cart
        </button>

        <button
          onClick={() => alert("Go to checkout page")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
