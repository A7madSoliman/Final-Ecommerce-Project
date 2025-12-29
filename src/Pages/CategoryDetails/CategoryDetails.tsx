import { useParams } from "react-router-dom";
import useCategory from "../../Hooks/useCategory";
import Loading from "../../Components/Loading/Loading";
import useProductsByCategory from "../../Hooks/useProductsByCategory";
import ProductCard from "../../Components/ProductCard/ProductCard";
import useAOS from "../../Hooks/useAOS";

export default function CategoryDetails() {
  useAOS();
  const { id } = useParams();
  const { data: categoryData, isLoading } = useCategory(id!);
  const {
    data: productsData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useProductsByCategory(id!);

  if (isLoading) return <Loading />;

  const allProducts = productsData?.pages.flatMap((page) => page.data) || [];

  return (
    <div className="container mx-auto py-10">
      <div
        className="flex flex-col md:flex-row gap-8 items-center mb-10"
        data-aos="fade-up"
      >
        <img
          src={categoryData?.data.image}
          alt={categoryData?.data.name}
          className="w-64 h-64 object-cover rounded-lg shadow"
        />
        <h1 className="text-4xl font-bold">{categoryData?.data.name}</h1>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {allProducts.length > 0 ? (
          allProducts.map((product) => (
            <div data-aos="fade-up">
              <ProductCard
                id={product._id}
                image={product.imageCover}
                category={product.category.name}
                name={product.title}
                price={product.price}
                priceAfterDiscount={product.priceAfterDiscount}
                ratingsAverage={product.ratingsAverage}
              />
            </div>
          ))
        ) : (
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            className="col-span-full flex justify-center mt-8"
          >
            <p className="text-gray-500 text-center text-lg">
              😔 No products available in this category right now.
            </p>
          </div>
        )}

        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className=" mt-8 bg-blue-600 text-white px-6 py-2 rounded flex items-center justify-center col-span-full mx-auto hover:bg-blue-700 transition disabled:opacity-50 cursor-pointer"
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </div>
  );
}
