import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  console.log("ThemeToggle rendered, current theme:", theme);

  return (
    <button
      onClick={() => {
        console.log("ThemeToggle button clicked!");
        toggleTheme();
      }}
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
  );
};

export default ThemeToggle;