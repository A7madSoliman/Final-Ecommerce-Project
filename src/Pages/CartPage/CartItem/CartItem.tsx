import { Trash2 } from "lucide-react";
import { useCartContext } from "../../../Context/CartContext";

interface CartItemProps {
  item: {
    id: string;
    productId: string;
    count: number;
    price: number;
    image?: string;
    name?: string;
  };
}

export default function CartItem({ item }: CartItemProps) {
  const { updateCartItem, removeCartItems } = useCartContext();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
      {/* Left: Image + Name */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        <img
          src={item.image ?? "https://via.placeholder.com/80"}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h3 className="font-semibold text-gray-800">
            {item.name ?? item.productId}
          </h3>
          <p className="text-gray-500">{item.price} L.E</p>
        </div>
      </div>

      {/* Middle: Quantity Controls */}
      <div className="flex items-center gap-2 my-2 md:my-0">
        <button
          onClick={() => updateCartItem({ id: item.id, count: item.count - 1 })}
          disabled={item.count <= 1}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          -
        </button>
        <span className="px-3 font-medium">{item.count}</span>
        <button
          onClick={() => updateCartItem({ id: item.id, count: item.count + 1 })}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          +
        </button>
      </div>

      {/* Right: Remove */}
      <button
        onClick={() => removeCartItems(item.id)}
        className="text-red-500 hover:text-red-700 transition mt-2 md:mt-0"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}
