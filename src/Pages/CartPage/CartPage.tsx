import CartSummary from "./CartSummary/CartSummary";

export default function CartPage() {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh] text-center">
      <span className="text-6xl mb-4">🛒</span>
      <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
      <p className="text-gray-500 mb-4">
        Looks like you haven’t added any products yet.
      </p>
      <a
        href="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Go Shopping
      </a>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-4">Cart Item</div>
      <div>
        <CartSummary />
      </div>
    </div>
  );
}
