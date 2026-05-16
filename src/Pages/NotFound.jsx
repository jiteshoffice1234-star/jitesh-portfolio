import { useEffect } from "react";
import { FaHome, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found | Jitesh Solanki";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4 sm:px-6">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated 404 Number */}
        <div className="relative mb-8 sm:mb-10">
          <h1 className="text-8xl sm:text-9xl md:text-[150px] font-bold text-gray-800 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-purple-100 rounded-full blur-2xl opacity-50"></div>
          </div>
        </div>

        {/* Glitch Effect Text */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Oops! Page Not Found
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved to another URL.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition duration-300 text-sm sm:text-base"
          >
            <FaHome />
            Home
          </Link>
          
          <Link
            to="/#projects"
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition duration-300 text-sm sm:text-base"
          >
            Projects
          </Link>
          
          <Link
            to="/#contact"
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition duration-300 text-sm sm:text-base"
          >
            <FaEnvelope />
            Contact
          </Link>
        </div>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg transition duration-300 font-medium text-sm sm:text-base"
        >
          <FaArrowLeft />
          Go Back
        </button>

        {/* Fun Fact / Easter Egg */}
        <p className="mt-8 text-xs sm:text-sm text-gray-400">
          💡 Hint: Try going back to the{" "}
          <Link to="/" className="text-purple-600 hover:underline">
            homepage
          </Link>{" "}
          or use the navigation menu.
        </p>
      </div>
    </div>
  );
};

export default NotFound;