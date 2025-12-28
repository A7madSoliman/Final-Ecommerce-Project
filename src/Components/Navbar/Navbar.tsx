import { NavLink } from "react-router-dom";
import logo from "@/assets/freshcart-logo.svg";
import { Menu, Moon, ShoppingCart, Sun, X } from "lucide-react";
import { useTheme } from "../../Context/ThemeContext";
import { useState } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "Wishlist", href: "/wishlist" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-sm">
      <nav className="container mx-auto h-16 px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <img
            src={logo}
            alt="FreshCart"
            className="w-32 h-10 object-contain"
          />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `
                relative px-3 py-2 font-medium
                text-gray-700 dark:text-gray-200
                transition-colors duration-200
                hover:text-blue-600 dark:hover:text-blue-400

                after:absolute after:left-0 after:-bottom-1
                after:w-full after:h-0.5 after:bg-blue-600
                after:scale-x-0 after:origin-left
                after:transition-transform after:duration-300

                ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 after:scale-x-100"
                    : ""
                }
              `
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
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

          {/* Cart */}
          <NavLink to="/cart" className="relative">
            <ShoppingCart className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            <span className="absolute -top-3 -right-3 bg-blue-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
              0
            </span>
          </NavLink>

          {/* Sign In */}
          <button className="hidden sm:block px-4 py-2 ml-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Sign In
          </button>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col gap-2 px-6 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
                  px-3 py-2 rounded-md font-medium
                  text-gray-700 dark:text-gray-200
                  hover:bg-gray-100 dark:hover:bg-gray-700
                  ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-700"
                      : ""
                  }
                `
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
