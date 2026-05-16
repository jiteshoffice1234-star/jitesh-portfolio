import { useEffect, useRef } from 'react';
import { FaHeart, FaRocket, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles - responsive to theme
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 2 + 1;
        this.speed = Math.random() * 1.5 + 0.5;
        // Check if dark mode is active
        const isDark = document.documentElement.classList.contains('dark');
        if (isDark) {
          this.color = `hsla(${Math.random() * 60 + 200}, 70%, 60%, ${Math.random() * 0.3 + 0.1})`;
        } else {
          this.color = `hsla(${Math.random() * 60 + 200}, 70%, 40%, ${Math.random() * 0.2 + 0.1})`;
        }
        this.wave = {
          amplitude: Math.random() * 40 + 15,
          frequency: Math.random() * 0.015 + 0.005,
        };
      }

      update() {
        this.y -= this.speed;
        this.x += Math.sin(this.y * this.wave.frequency) * this.wave.amplitude / 100;

        if (this.y < -10) {
          this.reset();
          this.y = canvas.height + 10;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < 60; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <footer className="relative bg-gradient-to-t from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200 py-12 px-4 overflow-hidden border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-10 dark:opacity-20"
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Call to Action */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Build Together?</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's create something amazing. Whether it's a website, app, or just a conversation about tech.
          </p>
          <button className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold overflow-hidden text-sm md:text-base text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start a Project <FaRocket className="group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
          <a 
            href="https://github.com/jitesh-solanki" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-300"
          >
            <FaGithub /> GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/jitesh-solanki-3b5930240/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-700 dark:text-blue-400 rounded-lg transition-colors duration-300"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a 
            href="https://leetcode.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-orange-50 dark:bg-orange-950 hover:bg-orange-100 dark:hover:bg-orange-900 text-orange-700 dark:text-orange-400 rounded-lg transition-colors duration-300"
          >
            <SiLeetcode /> LeetCode
          </a>
          <a 
            href="mailto:jiteshsolanki8990@gmail.com" 
            className="flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-950 hover:bg-red-100 dark:hover:bg-red-900 text-red-700 dark:text-red-400 rounded-lg transition-colors duration-300"
          >
            <FaEnvelope /> Email
          </a>
        </div>

        {/* Wave Separator */}
        <div className="relative h-2 mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30"></div>
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 md:w-8 md:h-8">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-[spin_10s_linear_infinite]"></div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Currently Working On
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
              Building modern web applications with React, exploring AI integration, and mastering responsive design patterns.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white">Quick Contact</h3>
            <div className="space-y-1 md:space-y-2">
              <p className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer text-sm md:text-base">
                ✉️ jiteshsolanki8990@gmail.com
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">📍 Ahmedabad, Gujarat</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">⏰ Available for freelance</p>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white">Tech Stack</h3>
            <div className="flex flex-wrap gap-1 md:gap-2">
              {['React', 'JavaScript', 'Tailwind', 'CSS3', 'HTML5', 'Git', 'Figma'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 md:px-3 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs md:text-sm transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 pt-6 md:pt-8 border-t border-gray-300 dark:border-gray-700">
          <div className="text-gray-600 dark:text-gray-400 text-xs md:text-sm flex items-center gap-2">
            <FaHeart className="text-red-500 animate-pulse" />
            Made with passion by Jitesh Solanki
          </div>
          
          <div className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-gray-500 dark:text-gray-400">
          <a href="#home" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Skills</a>
          <a href="#resume" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Resume</a>
          <a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;