export default function CategorySkeleton() {
  return (
    <div
      className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4 flex flex-col
     items-center justify-center animate-pulse gap-8"
    >
      <div className="w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded-full mb-3 "></div>
      <div className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
    </div>
  );
}
