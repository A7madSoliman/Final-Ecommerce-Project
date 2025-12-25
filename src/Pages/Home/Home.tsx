import { motion } from "framer-motion";
import Hero from "../../Components/Hero/Hero";
import ProductCard from "../../Components/ProductCard/ProductCard";
import CategorySlider from "../../Components/CategorySlider/CategorySlider";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>

      {/* Products Section */}
      <motion.section
        className="container mx-auto px-6 mb-32"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-500 mb-8">
            Shop Popular Categories
          </h2>

          {/* Category Slider */}
          <div className="mb-8">
            <CategorySlider />
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-500 mb-8">
            Featured Products
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ProductCard />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
