import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisiblity = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisiblity);
    return () => window.removeEventListener("scroll", toggleVisiblity);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-20 animate-pulse right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none cursor-pointer"
        >
          <ArrowUp />
        </button>
      )}
    </div>
  );
}
