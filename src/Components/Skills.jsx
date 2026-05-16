import { useEffect, useRef, useState } from "react";
import SkillData from "../Data/SkillData";
import SkillProgressData from "../Data/SkillProgressData";

const Skills = () => {
  const boxRef = useRef(null);
  const rafRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const [icons, setIcons] = useState(
    SkillData.map(() => ({
      x: Math.random() * 500,
      y: Math.random() * 200,
      vx: (Math.random() - 0.5) * 0.04,
      vy: (Math.random() - 0.5) * 0.04,
    }))
  );

  // Update container size on resize
  useEffect(() => {
    const updateSize = () => {
      if (boxRef.current) {
        const { width, height } = boxRef.current.getBoundingClientRect();
        setContainerSize({ width, height });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    const animate = () => {
      setIcons((prev) => {
        const box = boxRef.current;
        if (!box || containerSize.width === 0 || containerSize.height === 0) return prev;

        const width = containerSize.width;
        const height = containerSize.height;
        // Responsive icon sizes
        let ICON_SIZE;
        if (width < 640) { // Mobile
          ICON_SIZE = 56;
        } else if (width < 768) { // Small tablets
          ICON_SIZE = 64;
        } else if (width < 1024) { // Tablets
          ICON_SIZE = 72;
        } else { // Desktop
          ICON_SIZE = 96;
        }

        return prev.map((icon, i) => {
          let { x, y, vx, vy } = icon;

          x += vx;
          y += vy;

          // Boundary checking with responsive icon size
          if (x <= 0) {
            x = 0;
            vx = Math.abs(vx);
          } else if (x >= width - ICON_SIZE) {
            x = width - ICON_SIZE;
            vx = -Math.abs(vx);
          }

          if (y <= 0) {
            y = 0;
            vy = Math.abs(vy);
          } else if (y >= height - ICON_SIZE) {
            y = height - ICON_SIZE;
            vy = -Math.abs(vy);
          }

          // Collision detection with other icons
          prev.forEach((other, j) => {
            if (i !== j) {
              const dx = x - other.x;
              const dy = y - other.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist > 0 && dist < ICON_SIZE) {
                const angle = Math.atan2(dy, dx);
                vx += Math.cos(angle) * 0.05;
                vy += Math.sin(angle) * 0.05;
              }
            }
          });

          // Limit velocity for stability
          const maxSpeed = 0.2;
          const speed = Math.sqrt(vx * vx + vy * vy);
          if (speed > maxSpeed) {
            vx = (vx / speed) * maxSpeed;
            vy = (vy / speed) * maxSpeed;
          }

          return { x, y, vx, vy };
        });
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [containerSize]);

  // Get current icon size based on window width
  const getIconSize = () => {
    if (typeof window === 'undefined') return 96;
    const width = window.innerWidth;
    if (width < 640) return 56;   // Mobile
    if (width < 768) return 64;   // Small tablets
    if (width < 1024) return 72;  // Tablets
    return 96;                    // Desktop
  };

  const ICON_SIZE = getIconSize();

  return (
    <section
      id="skills"
      className="w-full flex flex-col items-center
                 min-h-[calc(100vh-72px)]
                 pt-16 pb-24 bg-white dark:bg-gray-900
                 transition-colors duration-300"
    >
      {/* HEADER */}
      <div className="text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white">
          My <span className="text-purple-400">Skills</span>
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          ✨ Technical expertise blended with creativity
        </p>
      </div>

      {/* FLOATING ICONS */}
      <div
        ref={boxRef}
        className="
          relative w-full max-w-[1400px] mx-4 sm:mx-6 md:mx-8 lg:mx-12
          mt-16 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px]
          rounded-2xl lg:rounded-3xl
          border border-cyan-200 dark:border-cyan-800
          shadow-[0_0_15px_rgba(0,255,255,0.3)] sm:shadow-[0_0_25px_rgba(0,255,255,0.35)] lg:shadow-[0_0_35px_rgba(0,255,255,0.4)]
          dark:shadow-[0_0_15px_rgba(0,255,255,0.15)]
          bg-white dark:bg-gray-800 overflow-hidden
          transition-colors duration-300
        "
      >
        {SkillData.map((skill, i) => (
          <div
            key={i}
            style={{ 
              transform: `translate(${icons[i].x}px, ${icons[i].y}px)`,
              width: `${ICON_SIZE}px`,
              height: `${ICON_SIZE}px`
            }}
            className="
              absolute rounded-full
              bg-[#D9DDDC] dark:bg-gray-700 shadow-md dark:shadow-gray-950
              flex flex-col items-center justify-center
              transition-transform duration-100 ease-linear
            "
          >
            <div className={`${ICON_SIZE <= 64 ? 'text-2xl' : ICON_SIZE <= 72 ? 'text-3xl' : 'text-4xl'} ${skill.color}`}>
              {skill.icon}
            </div>
            <span className={`mt-1 ${ICON_SIZE <= 64 ? 'text-[10px]' : 'text-xs'} font-medium text-gray-800 dark:text-gray-200`}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* ================= PROGRESS SECTION ================= */}
      <div className="w-full max-w-[1300px] px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SkillProgressData.map((category, index) => (
            <div
              key={index}
              className={`border border-blue-500 dark:border-blue-700 rounded-xl lg:rounded-2xl p-4 sm:p-6 bg-white dark:bg-gray-800 transition-colors duration-300
      ${index >= SkillProgressData.length - 2 ? "lg:col-span-2" : ""}
    `}
            >
              <h3 className="text-blue-600 dark:text-blue-400 text-base sm:text-lg font-semibold mb-4 sm:mb-5 text-center">
                {category.title}
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs sm:text-sm font-medium mb-1">
                      <span className="truncate pr-2 text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-blue-500 dark:text-blue-400 whitespace-nowrap">{skill.value}%</span>
                    </div>

                    <div className="w-full h-2 sm:h-3 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;