import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaNpm } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiVite } from "react-icons/si";

const Skills = () => {

  const skillCategories = {
    "Frontend": [
      { name: "React", level: 90, icon: <FaReact className="text-blue-500 text-4xl" /> },
      { name: "JavaScript", level: 92, icon: <FaJs className="text-yellow-500 text-4xl" /> },
      { name: "Tailwind CSS", level: 88, icon: <SiTailwindcss className="text-cyan-500 text-4xl" /> },
      { name: "HTML5", level: 95, icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
      { name: "CSS3", level: 90, icon: <FaCss3Alt className="text-blue-400 text-4xl" /> },
    ],
    "Backend": [
      { name: "Node.js", level: 85, icon: <FaNodeJs className="text-green-500 text-4xl" /> },
      { name: "Express.js", level: 80, icon: <SiExpress className="text-gray-500 text-4xl" /> },
      { name: "MongoDB", level: 80, icon: <SiMongodb className="text-emerald-500 text-4xl" /> },
    ],
    "Tools": [
      { name: "Git", level: 90, icon: <FaGitAlt className="text-red-500 text-4xl" /> },
      { name: "NPM", level: 85, icon: <FaNpm className="text-red-500 text-4xl" /> },
      { name: "Vite", level: 80, icon: <SiVite className="text-purple-400 text-4xl" /> },
    ]
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white max-w-7xl mx-auto">
      <div className="container mx-auto px-6 md:px-16 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Technologies I use in my projects:
        </motion.p>

        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="mt-10">
            <h3 className="text-2xl font-semibold">{category}</h3>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <svg width="100" height="100" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" strokeWidth="8" className="text-gray-700" fill="none" />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        strokeWidth="5"
                        stroke="currentColor"
                        fill="none"
                        strokeDasharray="251"
                        strokeDashoffset="251"
                        strokeLinecap="round"
                        className="text-purple-500"
                        animate={{ strokeDashoffset: (1 - skill.level / 100) * 251 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="mt-4">
                    {skill.icon}
                    <p className="mt-2 text-lg font-medium">{skill.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;