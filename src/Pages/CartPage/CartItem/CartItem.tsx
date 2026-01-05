import { Trash2 } from "lucide-react";

export default function CartItem() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
      {/* Left: Image + Name */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        {/* <img src= className="w-20 h-20 object-cover rounded" /> */}
        <div>
          <h3 className="font-semibold text-gray-800">Item Name</h3>
          <p className="text-gray-500">Item Price L.E</p>
        </div>
      </div>

      {/* Middle: Quantity Controls */}
      <div className="flex items-center gap-2 my-2 md:my-0">
        <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition">
          -
        </button>
        <span className="px-3 font-medium">Item Count</span>
        <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition">
          +
        </button>
      </div>

      {/* Right: Remove */}
      <button className="text-red-500 hover:text-red-700 transition mt-2 md:mt-0">
        <Trash2 size={20} />
      </button>
    </div>
  );
}
