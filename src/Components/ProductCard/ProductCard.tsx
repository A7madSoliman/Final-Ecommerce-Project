import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import type { ProductCardProps } from "../../Api/products.api";

export default function ProductCard({
  id,
  image,
  category,
  name,
  price,
  priceAfterDiscount,
  ratingsAverage,
}: ProductCardProps) {
  const hasDiscount = priceAfterDiscount && priceAfterDiscount < price;
  const discountPercentage = hasDiscount
    ? Math.round(((price - priceAfterDiscount) / price) * 100)
    : 0;
  const formatPrice = (price: number) => Math.round(price);

  return (
    <div className="p-2 relative rounded-md overflow-hidden group cursor-pointer bg-white border border-gray-300 transition-colors duration-300 hover:shadow-lg">
      <div className="relative rounded-md overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {hasDiscount && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold z-10">
            -{discountPercentage}%
          </div>
        )}
        <div className="layer absolute inset-0 bg-blue-400/30 dark:bg-blue-600/30 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-4 transform -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
              <Link to={`/products-details/${id}`}>
                <button className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                  <Eye className="w-5 h-5 text-gray-700 hover:text-blue-600 dark:hover:text-blue-400" />
                </button>
              </Link>
              <button
                className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 hover:shadow-xl delay-75 focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 dark:hover:text-red-400" />
              </button>
              <button
                className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 hover:shadow-xl delay-150 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                aria-label="Add to cart"
              >
                <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-green-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-sm text-gray-500 uppercase tracking-wide">
          {category}
        </h3>
        <h2 className="text-lg font-semibold text-gray-800 mt-1 line-clamp-1">
          {name}
        </h2>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          {hasDiscount ? (
            <>
              <span className="text-sm font-bold text-gray-900">
                {formatPrice(priceAfterDiscount)} L.E
              </span>
              <span className="text-xs text-gray-500 line-through">
                {formatPrice(price)} L.E
              </span>
            </>
          ) : (
            <span className="text-sm font-bold text-gray-900">
              {formatPrice(price)} L.E
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span className="text-sm font-medium text-gray-700">
            {(ratingsAverage ?? 0).toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
}
