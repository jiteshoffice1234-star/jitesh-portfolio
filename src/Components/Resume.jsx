import {
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaLayerGroup,
} from "react-icons/fa";

const Resume = () => {
  const projects = [
    "Ice Creem Website",
    "Arena Website",
    "Portfolio Website",
    "",
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Bootstrap",
    "Tailwind CSS",
    "Responsive Design",
    "UI/UX Basics",
    "Git & GitHub",
    "REST APIs",
    "Browser DevTools",
    "Performance Optimization",
    "Cross-Browser Compatibility",
    "Problem Solving",
    "Creativity",
    "Teamwork",
    "Communication",
  ];

  return (
    <section
      id="resume"
      className="w-full min-h-screen lg:min-h-[calc(100vh-72px)] flex flex-col items-center justify-start pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-32 bg-white px-4 sm:px-6"
    >
      {/* ===== HEADER ===== */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          My Resume
        </h1>

        <a
          href="/resume.pdf"
          download
          className="mt-6 sm:mt-8 inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
             rounded-lg sm:rounded-xl bg-purple-600 text-white font-medium
             hover:bg-purple-700 transition shadow-lg text-sm sm:text-base"
        >
          <FaDownload className="text-sm sm:text-base" />
          Download Resume
        </a>
      </div>

      {/* ===== RESUME CARD ===== */}
      <div
        className="
          w-full max-w-[1100px]
          bg-white rounded-xl sm:rounded-2xl
          border border-gray-200
          shadow-[0_5px_20px_rgba(0,0,0,0.06)] sm:shadow-[0_10px_40px_rgba(0,0,0,0.06)]
          px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12
        "
      >
        {/* NAME */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
          Jitesh S. Solanki
        </h2>

        {/* ROLE */}
        <p className="text-center text-gray-700 mt-1 sm:mt-2 text-sm sm:text-base">
          🎓 B.Tech — Computer Engineering
        </p>

        {/* LOCATION */}
        <p className="flex justify-center items-center gap-1 sm:gap-2 mt-1 text-gray-600 text-sm sm:text-base">
          <FaMapMarkerAlt className="text-red-500 text-xs sm:text-sm" />
          Ahmedabad, Gujarat, India
        </p>

        {/* CONTACT */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-2 sm:mt-3 text-gray-700 text-sm sm:text-base">
          <div className="flex items-center justify-center gap-1 sm:gap-2">
            <FaEnvelope className="text-purple-500 text-xs sm:text-sm" />
            <span className="break-all text-center">jiteshsolanki8990@gmail.com</span>
          </div>

          <div className="flex items-center justify-center gap-1 sm:gap-2">
            <FaPhone className="text-blue-500 text-xs sm:text-sm" />
            +91 XXXXXXXXXX
          </div>
        </div>

        {/* SUMMARY */}
        <p className="mt-4 sm:mt-6 text-center text-gray-700 leading-relaxed max-w-full sm:max-w-[900px] mx-auto text-sm sm:text-base">
          Passionate Front-End Developer experienced in building responsive,
          user-friendly web interfaces and modern UI/UX experiences. Skilled in
          HTML, CSS, JavaScript, React.js, Tailwind CSS, and Bootstrap, with a
          strong focus on performance, accessibility, and clean code. Always
          driven to craft engaging digital experiences and impactful web
          solutions
        </p>
      </div>

      {/* ===== EDUCATION SECTION ===== */}
      <div className="w-full max-w-[1100px] mt-10 sm:mt-14 md:mt-16 lg:mt-20">
        {/* TITLE */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-purple-600 shadow-lg">
            <FaGraduationCap className="text-white text-base sm:text-xl" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">Education</h2>
        </div>

        {/* EDUCATION CARDS */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {/* B.Tech */}
          <div
            className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8
                    shadow-[0_5px_20px_rgba(128,90,213,0.15)] sm:shadow-[0_8px_30px_rgba(128,90,213,0.15)]"
          >
            <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-gray-900">
              B.Tech in Computer Engineering
            </h3>
            <p className="text-gray-700 mt-1 sm:mt-2 text-sm sm:text-base">Atmiya University, Rajkot</p>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">
              2021 – 2025 — Current CGPA: 8.74
            </p>
          </div>

          {/* 12th */}
          <div
            className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8
                    shadow-[0_5px_20px_rgba(128,90,213,0.15)] sm:shadow-[0_8px_30px_rgba(128,90,213,0.15)]"
          >
            <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-gray-900">
              Higher Secondary (12th)
            </h3>
            <p className="text-gray-700 mt-1 sm:mt-2 text-sm sm:text-base">L.B.S Boys School</p>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">2019 – 2021 — 72.92%</p>
          </div>

          {/* 10th */}
          <div
            className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8
                    shadow-[0_5px_20px_rgba(128,90,213,0.15)] sm:shadow-[0_8px_30px_rgba(128,90,213,0.15)]"
          >
            <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-gray-900">
              Secondary (10th)
            </h3>
            <p className="text-gray-700 mt-1 sm:mt-2 text-sm sm:text-base">Secondary School Bhadli</p>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">2018 – 2019 — 67.66%</p>
          </div>
        </div>
      </div>

      {/* ===== PROJECTS & SKILLS SECTION ===== */}
      <div className="w-full max-w-[1100px] mx-auto py-8 sm:py-10 md:py-12 lg:py-12 px-0">
        {/* ================= PROJECTS ================= */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-purple-600 shadow-lg">
              <FaLaptopCode className="text-white text-base sm:text-xl" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">Projects</h2>
          </div>
          <div
            className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8
                    shadow-[0_5px_20px_rgba(128,90,213,0.15)] sm:shadow-[0_8px_30px_rgba(128,90,213,0.15)]"
          >
            <ul className="space-y-2 sm:space-y-3 md:space-y-4 ml-4 sm:ml-6">
              {projects.map((project, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 text-gray-800 text-sm sm:text-base"
                >
                  <span className="text-purple-600 text-base sm:text-lg mt-0.5">•</span>
                  <span>{project}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= SKILLS ================= */}
        <div>
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-purple-600 shadow-lg">
              <FaLayerGroup className="text-white text-base sm:text-xl" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">Skills</h2>
          </div>
          <div
            className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8
                    shadow-[0_5px_20px_rgba(128,90,213,0.15)] sm:shadow-[0_8px_30px_rgba(128,90,213,0.15)]"
          >
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="
                    px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium
                    text-purple-700 bg-purple-50
                    border border-purple-200
                    shadow-[0_0_15px_rgba(168,85,247,0.2)] sm:shadow-[0_0_20px_rgba(168,85,247,0.25)]
                    hover:bg-purple-100 transition
                    whitespace-nowrap
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;