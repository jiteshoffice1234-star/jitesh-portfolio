import { MdLocationOn } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

/* ICON WRAPPER */
const IconWrap = ({ children }) => (
  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-black dark:bg-gray-700 rounded-full flex items-center justify-center
                  text-white text-lg sm:text-xl md:text-2xl cursor-pointer hover:scale-105 transition">
    {children}
  </div>
);

const Home = () => {
  return (
    <>
      {/* FULL WIDTH CENTER WRAPPER */}
      <div className="w-full flex justify-center min-h-[calc(100vh-72px)] bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* RESPONSIVE CONTAINER */}
        <div className="container flex flex-col lg:flex-row my-5 sm:my-8 md:my-[50px] px-4 sm:px-8 md:px-12 lg:px-[150px]">
          
          {/* LEFT CONTENT - Full width on mobile, half on desktop */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold lg:font-normal text-black dark:text-white">
              Hi! I'm
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold my-2 sm:my-3 text-purple-800 dark:text-purple-400">
              JITESH SOLANKI
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200">
              Computer Engineer | FrontEnd Developer
            </p>
            
            <div className="mt-3 sm:mt-4">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300">
                Creating responsive, user-friendly interfaces.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300">
                Building modern, high-performance web applications.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300">
                Turning ideas into clean, interactive user experiences.
              </p>
            </div>

            {/* SKILL TAGS - Responsive grid */}
            <div className="mt-6 sm:mt-8">
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-2 sm:mb-3">
                <p className="px-3 py-1 text-sm sm:text-base border border-2 border-purple-800 dark:border-purple-500 rounded-full hover:shadow-[0_0_10px_rgba(220,38,38,0.9)] transition duration-300 whitespace-nowrap text-gray-800 dark:text-gray-200">
                  Frontend Developer
                </p>
                <p className="px-3 py-1 text-sm sm:text-base border border-2 border-purple-800 dark:border-purple-500 rounded-full hover:shadow-[0_0_10px_rgba(220,38,38,0.9)] transition duration-300 whitespace-nowrap text-gray-800 dark:text-gray-200">
                  React.js Developer
                </p>
                <p className="px-3 py-1 text-sm sm:text-base border border-2 border-purple-800 dark:border-purple-500 rounded-full hover:shadow-[0_0_10px_rgba(220,38,38,0.9)] transition duration-300 whitespace-nowrap text-gray-800 dark:text-gray-200">
                  JavaScript Specialist
                </p>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <p className="px-3 py-1 text-sm sm:text-base border border-2 border-purple-800 dark:border-purple-500 rounded-full hover:shadow-[0_0_10px_rgba(220,38,38,0.9)] transition duration-300 whitespace-nowrap text-gray-800 dark:text-gray-200">
                  UI/UX Enthusiast
                </p>
                <p className="px-3 py-1 text-sm sm:text-base border border-2 border-purple-800 dark:border-purple-500 rounded-full hover:shadow-[0_0_10px_rgba(220,38,38,0.9)] transition duration-300 whitespace-nowrap text-gray-800 dark:text-gray-200">
                  Responsive Web Designer
                </p>
              </div>
            </div>

            {/* INFO CARDS - Stack vertically on mobile */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 md:gap-6 mt-8 sm:mt-10">
              <div className="w-full sm:w-[180px] md:w-[220px] lg:w-[280px] h-[88px] bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center px-4 transition-colors duration-300">
                <div>
                  <div className="flex items-center gap-2">
                    <MdLocationOn className="text-pink-500 text-[16px] sm:text-[18px]" />
                    <p className="text-xs sm:text-sm font-medium text-blue-500 dark:text-blue-400 leading-tight">
                      Location
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm md:text-[15px] text-gray-800 dark:text-gray-300 mt-1">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-[180px] md:w-[220px] lg:w-[280px] h-[88px] bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center px-4 transition-colors duration-300">
                <div>
                  <div className="flex items-center gap-2">
                    <FaBriefcase className="text-yellow-500 text-[16px] sm:text-[18px]" />
                    <p className="text-xs sm:text-sm font-medium text-blue-500 dark:text-blue-400 leading-tight">
                      Expertise
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm md:text-[15px] text-gray-800 dark:text-gray-300 mt-1">
                    FrontEnd Developer
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-[180px] md:w-[220px] lg:w-[280px] h-[88px] bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center px-4 transition-colors duration-300">
                <div>
                  <div className="flex items-center gap-2">
                    <MdEmail className="text-pink-500 text-[16px] sm:text-[18px]" />
                    <p className="text-xs sm:text-sm font-medium text-blue-500 dark:text-blue-400 leading-tight">
                      Contact
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm md:text-[15px] text-gray-800 dark:text-gray-300 mt-1 break-all">
                    jiteshsolanki8990@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIAL LINKS - Stack vertically on mobile */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full mt-6 sm:mt-8">
              <div className="w-full sm:w-auto">
                <p className="text-center sm:text-left text-sm font-medium mb-3 sm:mb-4 text-gray-700 dark:text-gray-300">
                  Connect with me
                </p>

                <div className="flex justify-center sm:justify-start gap-3 sm:gap-4 flex-wrap">
                  <a href="https://www.linkedin.com/in/jitesh-solanki-3b5930240/" target="_blank" rel="noreferrer">
                    <IconWrap><FaLinkedinIn /></IconWrap>
                  </a>
                  <a href="mailto:jiteshsolanki8990@gmail.com">
                    <IconWrap><FaEnvelope /></IconWrap>
                  </a>
                  <a href="https://wa.me/917982406468" target="_blank" rel="noreferrer">
                    <IconWrap><FaWhatsapp /></IconWrap>
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <IconWrap><FaInstagram /></IconWrap>
                  </a>
                  <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <IconWrap><FaFacebookF /></IconWrap>
                  </a>
                </div>
              </div>

              <div className="mt-6 sm:mt-0 sm:ms-8 md:ms-[80px] w-full sm:w-auto">
                <p className="text-center sm:text-left text-sm font-medium mb-3 sm:mb-4 text-gray-700 dark:text-gray-300">
                  See what I'm doing
                </p>

                <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
                  <a href="https://github.com/jitesh-solanki" target="_blank" rel="noreferrer">
                    <IconWrap><FaGithub /></IconWrap>
                  </a>
                  <a href="https://leetcode.com/YOUR_LEETCODE_USERNAME" target="_blank" rel="noreferrer">
                    <IconWrap><SiLeetcode /></IconWrap>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE - Comes first on mobile, second on desktop */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex items-center justify-center mb-6 sm:mb-8 lg:mb-0">
            <img 
              className="h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:h-full lg:max-h-none object-contain" 
              src="/profile-pic1.png" 
              alt="Jitesh Solanki - Frontend Developer portfolio profile picture" 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;