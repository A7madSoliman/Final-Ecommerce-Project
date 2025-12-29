import { useState } from "react";
import Loading from "../../Components/Loading/Loading";
import ProductCard from "../../Components/ProductCard/ProductCard";
import useProducts from "../../Hooks/useProducts";
import useCategories from "../../Hooks/useCategories";
import useSubcategories from "../../Hooks/useSubcategories";
import useAOS from "../../Hooks/useAOS";

export default function Products() {
  useAOS();
  const [selectedCategoryId, setSelectedCategoryId] = useState<
    string | undefined
  >(undefined);

  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState<
    string | undefined
  >(undefined);

  const { data: categoriesData, isLoading: isCategoriesLoading } =
    useCategories();

  const { data: subcategoriesData, isLoading: isSubcategoriesLoading } =
    useSubcategories(selectedCategoryId || "");

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading } =
    useProducts({
      categoryId: selectedCategoryId,
      subcategoryId: selectedSubcategoryId,
    });

  if (isLoading) return <Loading />;

  const allProducts = data?.pages.flatMap((page) => page.data) || [];
  return (
    <div className="container mx-auto py-10 flex gap-8">
      {/* Sidebar Filters */}

      <div className="w-1/4 space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>
          {isCategoriesLoading ? (
            <p>Loading categories...</p>
          ) : (
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setSelectedCategoryId(undefined)}
                className={`px-4 py-2 rounded border text-left cursor-pointer hover:bg-blue-600 transition-colors  ${
                  !selectedCategoryId
                    ? "bg-blue-600 text-white"
                    : "bg-white text-black"
                }`}
              >
                All
              </button>

              {categoriesData?.data.map((category) => (
                <button
                  key={category._id}
                  onClick={() => setSelectedCategoryId(category._id)}
                  className={`px-4 py-2 rounded border text-left cursor-pointer hover:bg-blue-600 transition-colors ${
                    selectedCategoryId === category._id
                      ? "bg-blue-600 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Subcategory filter */}
        {selectedCategoryId && (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Filter by Subcategory
            </h2>
            {isSubcategoriesLoading ? (
              <p>Loading subcategories...</p>
            ) : (
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setSelectedSubcategoryId(undefined)}
                  className={`px-4 py-2 rounded border text-left cursor-pointer hover:bg-blue-600 transition-colors ${
                    !selectedSubcategoryId
                      ? "bg-blue-600 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  All
                </button>

                {subcategoriesData?.data.map((sub) => (
                  <button
                    key={sub._id}
                    onClick={() => setSelectedSubcategoryId(sub._id)}
                    className={`px-4 py-2 rounded border text-left cursor-pointer hover:bg-blue-600 transition-colors ${
                      selectedSubcategoryId === sub._id
                        ? "bg-blue-600 text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {sub.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Products Grid */}
      <div className="w-3/4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {allProducts.length > 0 ? (
            allProducts.map((product) => (
              <div key={product._id} data-aos="fade-up">
                <ProductCard
                  key={product._id}
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
            <div className="col-span-full flex justify-center items-center mt-8">
              <p className="text-gray-500 text-lg text-center">
                😔 No products found for this filter.
              </p>
            </div>
          )}
        </div>

        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="mt-8 bg-blue-600 text-white px-6 py-2 rounded block mx-auto hover:bg-blue-700 transition disabled:opacity-50 cursor-pointer"
          >
            {isFetchingNextPage ? "Loading More..." : "Load More"}
          </button>
        )}
      </div>
    </div>
  );
}
