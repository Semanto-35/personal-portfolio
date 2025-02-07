import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-gray-900 text-white max-w-7xl mx-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-16">

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-64 h-64 md:w-80 md:h-80"
        >
          <img
            src="https://i.ibb.co.com/zVcCZGWy/IMG-20220503-171314.jpg"
            alt="Your Name"
            className="w-full h-full object-cover rounded-full border-4 border-purple-400 shadow-lg"
          />
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl text-center md:text-left"
        >
          <motion.h2 className="text-3xl md:text-5xl font-bold text-white">
            About Me
          </motion.h2>
          <motion.p className="mt-4 text-gray-300 leading-relaxed">
            My programming journey started with curiosity about technology&apos;s impact. I began with basic web development and evolved into the <span className="text-purple-400">MERN Stack</span>, building scalable and interactive applications with clean, efficient code.
          </motion.p>
          <motion.p className="mt-4 text-gray-300 leading-relaxed">
            I love crafting seamless user experiences, optimizing performance, and solving problems creatively. Developing intuitive applications that make a difference excites me.
          </motion.p>
          <motion.p className="mt-4 text-gray-300 leading-relaxed">
            Outside coding, I&apos;m passionate about football, staying active and disciplined. I enjoy photography, capturing unique perspectives, and exploring new technologies.
          </motion.p>
          <motion.p className="mt-4 text-gray-300 leading-relaxed">
            I believe in continuous learning and collaboration. My problem-solving mindset and passion for innovation drive me to create impactful solutions. Let&apos;s build something amazing together!
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap justify-center md:justify-start gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {["React", "Node.js", "MongoDB", "TailwindCSS", "Express", "Firebase"].map(
              (skill, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-purple-400 text-black font-medium rounded-lg shadow-md transform transition duration-300 hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;