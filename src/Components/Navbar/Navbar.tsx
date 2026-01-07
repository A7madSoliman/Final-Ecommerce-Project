import { NavLink } from "react-router-dom";
import logo from "@/assets/freshcart-logo.svg";
import {
  Loader2,
  LogOut,
  Menu,
  Moon,
  ShoppingCart,
  Sun,
  X,
} from "lucide-react";
import { useTheme } from "../../Context/ThemeContext";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useCart } from "../../Hooks/useCart";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const { cart, isAdding, isFetching } = useCart();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "Wishlist", href: "/wishlist" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-lg">
      <nav className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
        <NavLink to="/">
          <img
            src={logo}
            alt="FreshCart"
            className="w-32 h-10 object-contain"
          />
        </NavLink>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `relative font-medium px-2 py-1 transition-colors
                  text-gray-700 dark:text-gray-200
                  hover:text-blue-600 dark:hover:text-blue-400
                  after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5
                  after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 after:scale-x-100"
                      : ""
                  }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-blue-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>

          <NavLink to="/cart" className="relative">
            <ShoppingCart className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            <span className="absolute -top-3 -right-3 bg-blue-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
              {isAdding || isFetching ? (
                <Loader2 className="w-3 h-3 animate-spin" />
              ) : (
                cart?.numOfCartItems || 0
              )}
            </span>
          </NavLink>

          {isLoggedIn ? (
            <button
              onClick={logout}
              className="px-4 py-2 ml-2 bg-blue-500 text-white cursor-pointer rounded-md hover:bg-red-700"
            >
              <LogOut />
            </button>
          ) : (
            <NavLink
              to="/login"
              className="hidden sm:block px-4 py-2 ml-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Sign In
            </NavLink>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col gap-2 px-6 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-700"
                      : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
