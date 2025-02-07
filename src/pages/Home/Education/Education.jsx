import { useRef } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const sectionRef = useRef(null);
  const educationData = [
    {
      degree: "Bachelor of Science",
      institution: "Anandamohon College",
      duration: "2020 - Present",
      description: "Studing in Mathematics and core concepts of programming, algorithms.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Shohid Sayed Nazrul Islam College",
      duration: "2018 - 2020",
      description: "Focused on mathematics, physics, and computer science as core subjects.",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Purbadhala J.M Pilot High School",
      duration: "2013 - 2018",
      description: "Built foundational knowledge in science, mathematics, and problem-solving.",
    },
  ];


  return (
    <section ref={sectionRef} id="education" className="py-20 bg-gray-900 text-white max-w-7xl mx-auto">
      <div className="container mx-auto px-6 md:px-16 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Educational Qualification
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          My academic journey and qualifications:
        </motion.p>

        <div className="mt-10 relative max-w-3xl mx-auto">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center justify-between mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white text-xl absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <FaGraduationCap />
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-5/12">
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                <p className="text-gray-400">{edu.institution}</p>
                <p className="text-sm text-blue-400 mt-1">{edu.duration}</p>
                <p className="mt-3 text-gray-300">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;