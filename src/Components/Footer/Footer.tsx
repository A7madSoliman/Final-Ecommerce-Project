export default function Footer() {
  return (
    <>
      <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="container mx-auto h-16 px-6 flex items-center justify-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} FreshCart. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
