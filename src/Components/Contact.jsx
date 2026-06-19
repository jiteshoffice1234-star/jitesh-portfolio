import { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn, MdSend } from "react-icons/md";
import { FaUser, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="w-full min-h-screen flex flex-col items-center justify-center py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* HEADER */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Let's Connect & <span className="text-purple-600 dark:text-purple-400">Collaborate</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Whether it's a new project or collaboration — I'd love to hear from you!
        </p>
      </div>

      {/* CONTACT CONTAINER */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          
          {/* LEFT SIDE - CONTACT INFO */}
          <div className="lg:w-2/5">
            <div className="space-y-6 sm:space-y-8">
              {/* EMAIL */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                  <MdEmail className="text-xl sm:text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                  <a 
                    href="mailto:jiteshsolanki8990@gmail.com" 
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-base sm:text-lg"
                  >
                    jiteshsolanki8990@gmail.com
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <MdPhone className="text-xl sm:text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg">Available on request</p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  <MdLocationOn className="text-xl sm:text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">Ahmedabad, Gujarat, India</p>
                </div>
              </div>
            </div>

            {/* DECORATIVE ELEMENT */}
            <div className="mt-10 sm:mt-12 hidden lg:block">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 opacity-50"></div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="lg:w-3/5">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-xl dark:shadow-gray-950 p-6 sm:p-8 md:p-10 transition-colors duration-300">
              {/* NAME FIELD */}
              <div className="mb-6 sm:mb-8">
                <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium mb-3">
                  <FaUser className="text-purple-600 dark:text-purple-400" />
                  <span>Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>

              {/* EMAIL FIELD */}
              <div className="mb-6 sm:mb-8">
                <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium mb-3">
                  <MdEmail className="text-purple-600 dark:text-purple-400" />
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>

              {/* SUBJECT FIELD */}
              <div className="mb-6 sm:mb-8">
                <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium mb-3">
                  <FaPaperPlane className="text-purple-600 dark:text-purple-400" />
                  <span>Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  required
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>

              {/* MESSAGE FIELD */}
              <div className="mb-8 sm:mb-10">
                <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium mb-3">
                  <MdSend className="text-purple-600 dark:text-purple-400" />
                  <span>Message</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full px-8 py-3 sm:py-4 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-semibold rounded-lg sm:rounded-xl transition duration-300 flex items-center justify-center gap-2"
              >
                <MdSend className="text-lg" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ADDITIONAL CONTACT METHODS */}
      <div className="mt-16 sm:mt-20 md:mt-24 text-center max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Prefer other ways to connect?
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a 
            href="mailto:jiteshsolanki8990@gmail.com" 
            className="px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg transition"
          >
            Email me directly
          </a>
          
          <a 
            href="https://linkedin.com/in/jitesh-solanki-3b5930240/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-800 dark:text-blue-400 rounded-lg transition"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;