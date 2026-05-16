import { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "gallery", label: "Gallery" },
    { id: "skills", label: "Skills" },
    { id: "resume", label: "Resume" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  const handleToggle = () => {
    console.log("Toggle button clicked, current theme:", theme);
    toggleTheme();
  };

  return (
    <header className="w-full bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-sm dark:shadow-gray-800 transition-colors duration-300">
      <div className="w-full flex justify-center">
        <div className="container px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white font-semibold text-sm sm:text-lg">
              JS
            </div>
            <div>
              <h1 className="text-sm sm:text-md font-semibold text-gray-900 dark:text-white">
                Jitesh Solanki
              </h1>
              <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400">
                FrontEnd • Developer
              </p>
            </div>
          </div>

          {/* DESKTOP NAVBAR */}
          <nav className="hidden lg:flex gap-6 xl:gap-10 text-base xl:text-lg font-medium mx-4 xl:mx-[200px]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-300 text-gray-800 dark:text-gray-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* RIGHT SECTION: Theme Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* THEME TOGGLE BUTTON */}
            <button
              onClick={handleToggle}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full 
                         bg-gray-200 dark:bg-gray-700 
                         hover:bg-gray-300 dark:hover:bg-gray-600
                         transition-all duration-300 
                         flex items-center justify-center
                         shadow-md hover:shadow-lg"
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              type="button"
            >
              {theme === "light" ? (
                <FaSun className="text-yellow-500 text-lg sm:text-xl" />
              ) : (
                <FaMoon className="text-gray-300 text-lg sm:text-xl" />
              )}
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden text-2xl text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 shadow-lg transition-colors duration-300">
          <div className="container px-4 py-6 sm:py-8">
            <nav className="flex flex-col items-center space-y-4 sm:space-y-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-center w-full sm:w-auto sm:px-8 py-3 sm:py-4 text-gray-800 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-300 font-medium text-lg sm:text-xl"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            <div className="flex justify-center mt-6 sm:mt-8">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-300 text-sm"
              >
                Close Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;  