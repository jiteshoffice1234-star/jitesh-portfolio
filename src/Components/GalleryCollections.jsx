import { useState } from "react";
import {
  FaUser,
  FaBriefcase,
  FaTrophy,
  FaCamera,
  FaArrowLeft,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const GalleryCollections = () => {
  // ACTIVE TAB STATE
  const [activeTab, setActiveTab] = useState("personal");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // GALLERY DATA
  const galleryData = {
    personal: [
      "/gallery/personal1.jpg",
      "/gallery/personal2.jpg",
      "/gallery/personal3.jpg",
      "/gallery/personal4.jpg",
      "/gallery/personal5.jpg",
      "/gallery/personal6.jpg",
      "/gallery/personal7.jpg",
      "/gallery/personal8.jpg",
      "/gallery/personal9.jpg",
      "/gallery/personal10.jpg",
    ],
    projects: [
      "/gallery/project1.jpg",
      "/gallery/project2.jpg",
      "/gallery/project3.jpg",
    ],
    achievements: [
      "/gallery/achievement1.jpg",
      "/gallery/achievement2.jpg",
    ],
    photography: [
      "/gallery/photo1.jpg",
      "/gallery/photo2.jpg",
      "/gallery/photo3.jpg",
      "/gallery/photo4.jpg",
    ],
  };

  const tabs = [
    { id: "personal", label: "Personal Life", icon: <FaUser /> },
    { id: "projects", label: "Projects & Work", icon: <FaBriefcase /> },
    { id: "achievements", label: "Achievements", icon: <FaTrophy /> },
    { id: "photography", label: "Photography Lab", icon: <FaCamera /> },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* HEADER */}
      <div className="w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto h-16 sm:h-20 md:h-[100px] flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-[20px]">
          {/* LEFT - Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-700 dark:text-purple-400 whitespace-nowrap">
            My Collections
          </h1>

          {/* CENTER NAV - Desktop */}
          <nav className="hidden lg:flex gap-6 xl:gap-10 text-base xl:text-lg font-medium">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center gap-2 cursor-pointer pb-1 transition-colors
                  ${
                    activeTab === tab.id
                      ? "text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
              >
                <span className="text-sm xl:text-base">{tab.icon}</span>
                <span>{tab.label}</span>
              </div>
            ))}
          </nav>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-2xl text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* BACK BUTTON */}
            <a
              href="/"
              className="flex items-center gap-2
                         bg-black dark:bg-white text-white dark:text-black
                         px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full
                         hover:opacity-90 transition text-xs sm:text-sm md:text-base whitespace-nowrap"
              aria-label="Go back to home page"
            >
              <FaArrowLeft className="text-xs sm:text-sm" aria-label="Back arrow icon" />
              <span className="hidden sm:inline">Back</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg transition-colors duration-300">
            <div className="container px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`flex items-center gap-3 py-3 px-4 rounded-lg cursor-pointer transition-colors
                      ${
                        activeTab === tab.id
                          ? "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 font-semibold"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    <span className="text-base font-medium">{tab.label}</span>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* PAGE CONTENT */}
      <div className="container mx-auto py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 lg:px-[20px] bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Active Tab Indicator for Mobile */}
        <div className="lg:hidden mb-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <div className="flex items-center gap-3">
            <span className="text-purple-600 dark:text-purple-400 text-lg">
              {tabs.find(tab => tab.id === activeTab)?.icon}
            </span>
            <div>
              <h2 className="text-lg font-semibold text-purple-700 dark:text-purple-400">
                {tabs.find(tab => tab.id === activeTab)?.label}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {galleryData[activeTab].length} photos
              </p>
            </div>
          </div>
        </div>

        {/* GALLERY CONTENT */}
        
        {/* PERSONAL LIFE – MASONRY LAYOUT */}
        {activeTab === "personal" && (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
            {galleryData.personal.map((img, index) => (
              <div
                key={index}
                className="break-inside-avoid rounded-lg sm:rounded-sm overflow-hidden
                           shadow-md dark:shadow-gray-950 hover:shadow-xl transition duration-300
                           group cursor-pointer bg-white dark:bg-gray-800"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={img}
                    alt={`Personal gallery image ${index + 1} of ${galleryData.personal.length} - Jitesh Solanki's memories and personal moments`}
                    className="w-full h-auto object-cover transition-transform duration-500 ease-out
                             group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* OTHER TABS – NORMAL GRID */}
        {activeTab !== "personal" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {galleryData[activeTab].map((img, index) => (
              <div
                key={index}
                className="rounded-lg sm:rounded-xl overflow-hidden
                           shadow-md dark:shadow-gray-950 hover:shadow-xl
                           transition duration-300
                           group cursor-pointer bg-white dark:bg-gray-800"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={img}
                    alt={`${activeTab} gallery image ${index + 1} of ${galleryData[activeTab].length} - ${activeTab === "projects" ? "Project work showcase" : activeTab === "achievements" ? "Achievements and recognition" : "Photography collection"}`}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-[250px] object-cover 
                             transition-transform duration-500 ease-out
                             group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {galleryData[activeTab].length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <div className="text-5xl sm:text-6xl mb-4">📷</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              No images in this collection yet
            </h3>
            <p className="text-gray-500 dark:text-gray-400">Check back soon for updates!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default GalleryCollections;