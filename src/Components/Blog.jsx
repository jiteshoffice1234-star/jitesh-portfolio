import React from 'react';
import { FaBlog, FaEnvelope } from 'react-icons/fa';

const Blog = () => {
  return (
    <section
      id="blog"
      className="w-full min-h-[calc(100vh-72px)] flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4 sm:px-6 transition-colors duration-300"
    >
      <div className="text-center max-w-2xl mx-auto">
        {/* Icon */}
        <div className="mb-6 sm:mb-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-full flex items-center justify-center">
            <FaBlog className="text-4xl sm:text-5xl text-purple-600 dark:text-purple-400" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Blog <span className="text-purple-600 dark:text-purple-400">Coming Soon</span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
          I'm working on some exciting articles about web development, 
          React, AI, and my learning journey. Stay tuned!
        </p>

        {/* Decorative line */}
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>

        {/* Message */}
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
          Want to get notified when I publish?
        </p>

        {/* Notify Button */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded-lg transition duration-300 shadow-md hover:shadow-lg"
        >
          <FaEnvelope />
          Notify Me
        </a>
      </div>
    </section>
  );
};

export default Blog;