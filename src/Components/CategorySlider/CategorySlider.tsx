import useCategories from "../../Hooks/useCategories";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CategorySkeleton from "../CategorySkeleton/CategorySkeleton";

export default function CategorySlider() {
  const { data, isLoading, isError } = useCategories();

  if (isError) {
    return (
      <div className="text-center py-10 text-red-500">
        Failed to load categories
      </div>
    );
  }

  return (
    <section className="mb-8">
      <Swiper
        spaceBetween={16}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        modules={[Autoplay]}
      >
        {isLoading
          ? Array.from({ length: 5 }).map((_, i) => (
              <SwiperSlide key={i}>
                <CategorySkeleton />
              </SwiperSlide>
            ))
          : data?.data.map((category) => (
              <SwiperSlide key={category._id}>
                <div className="bg-white border border-gray-300 rounded-lg shadow-md p-3 sm:p-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-cover sm:h-32 rounded-md"
                  />
                  <h3 className="text-center mt-2 text-sm sm:text-base text-gray-800 dark:text-gray-500">
                    {category.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </section>
  );
}
