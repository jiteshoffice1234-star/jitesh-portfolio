import { FaImages, FaArrowRight } from "react-icons/fa";

const Gallery = () => {
  return (
    <>
      {/* HEADING SECTION */}
      <div className="w-full flex justify-center items-center h-20 sm:h-24 md:h-28 lg:h-[140px] py-4 bg-white dark:bg-gray-900 transition-colors duration-300">
        <h1 className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-center">
          My <span className="text-purple-600 dark:text-purple-400">Gallery</span>
        </h1>
      </div>

      {/* IMAGE SECTION */}
      <div
        className="w-full
                   h-[calc(60vh-80px)] sm:h-[calc(70vh-100px)] md:h-[calc(80vh-120px)] lg:h-[calc(100vh-212px)]
                   bg-[url('/Beach-BG.jpg')]
                   bg-cover bg-center bg-no-repeat flex items-center px-4 sm:px-6 md:px-8"
        aria-label="Scenic beach background image for gallery section showcasing a journey captured in frames"
      >
        <div className="container mx-auto max-w-[1300px]">
          {/* TITLE - Icon stays beside text on all screens */}
          <h1 className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white">
            <FaImages className="text-black dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex-shrink-0" 
              aria-label="Gallery icon" />
            <span className="text-left">
              A Journey Captured in Frames
            </span>
          </h1>

          {/* VIEW GALLERY BUTTON */}
          <a
            href="/gallery/collections"
            className="mt-4 sm:mt-5 md:mt-6 inline-flex items-center gap-2 sm:gap-3
             border border-black dark:border-white rounded-full
             px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 font-medium
             transition-all duration-300
             bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-105
             text-sm sm:text-base"
            aria-label="View full gallery collections page"
          >
            View My Gallery
            <FaArrowRight className="text-xs sm:text-sm" aria-label="Arrow right icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Gallery;