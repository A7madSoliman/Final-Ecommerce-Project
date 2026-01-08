import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 pt-16 pb-10 shadow-lg ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {/* 1st part */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Company</h2>
          <Link to="#" className="block text-sm hover:text-blue-600">
            About Us
          </Link>
          <Link to="#" className="block text-sm hover:text-blue-600">
            Careers
          </Link>
          <Link to="#" className="block text-sm hover:text-blue-600">
            Blogs
          </Link>
          <Link to="#" className="block text-sm hover:text-blue-600">
            Gift Cards
          </Link>
          <Link to="#" className="block text-sm hover:text-blue-600">
            Magazine
          </Link>
        </div>

        {/* 2nd part */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Support</h2>
          <Link to="#" className="block text-sm hover:text-blue-600">
            Contact
          </Link>
          <Link to="#" className="block text-sm hover:text-blue-600">
            Legal Notice
          </Link>
          <Link to="#" className="block text-sm hover:text-blue-600">
            Privacy
          </Link>
          <Link to="#" className="block text-sm hover:text-blue-600">
            Terms & Conditions
          </Link>
          <Link to="#" className="block text-sm hover:text-blue-600">
            Sitemap
          </Link>
        </div>

        {/* 3rd part */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Other Services</h2>
          <Link to="#" className="block text-sm hover:text-blue-600">
            Service 1
          </Link>
          <Link to="#" className="block text-sm hover:text-blue-600">
            Service 2
          </Link>
          <Link to="#" className="block text-sm hover:text-blue-600">
            Service 3
          </Link>
          <Link to="#" className="block text-sm hover:text-blue-600">
            Service 4
          </Link>
        </div>

        {/* 4th part */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Contact Us</h2>
          <div>
            <p className="text-sm">Mobile</p>
            <p className="font-bold text-gray-800 dark:text-white">
              +201014215587
            </p>
          </div>
          <div className="mt-2">
            <p className="text-sm">Email</p>
            <p className="font-bold text-gray-800 dark:text-white">
              ahmadsoliman283@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* bottom section */}
      <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-6 max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Webdev. All rights reserved
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Follow us:</span>
          <Link to="#" className="hover:text-blue-600">
            <Facebook size={20} />
          </Link>
          <Link to="#" className="hover:text-black">
            <Twitter size={20} />
          </Link>
          <Link to="#" className="hover:text-rose-500">
            <Instagram size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
