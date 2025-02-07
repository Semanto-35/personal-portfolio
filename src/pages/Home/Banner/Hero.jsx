import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  return (
    <section id="home" className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-6 items-center justify-center text-center md:text-left bg-gray-900 pt-32 pb-16">
      <div className="max-w-3xl mx-auto md:mx-0 p-6">
        <motion.h2
          className="text-lg font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to My Portfolio
        </motion.h2>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-100 mt-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3 }}
        >
          Hi, I&apos;m <span className="text-purple-400">Sabbir Hossain Semanto</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mt-2"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Full Stack Developer | MERN Enthusiast
        </motion.p>

        <motion.div
          className="mt-6 flex justify-center md:justify-start gap-4"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.9 }}
        >
          <a href="/resume.pdf" download className="bg-purple-600 text-white px-4 py-2 rounded-lg text-lg font-medium hover:bg-purple-700">
            Download Resume
          </a>
          <a href="#contact" className="border-2 border-purple-600 text-purple-600 px-4 py-2 rounded-lg text-lg font-medium hover:bg-purple-600 hover:text-white">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          className="mt-6 flex justify-center md:justify-start gap-4"
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.1 }}
        >
          <a href="https://github.com/Semanto-35" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sabbir-hossain-semanto-22a40934b/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-gray-300">
            <FaLinkedin />
          </a>
          <a href="https://x.com/Semanto_35" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-gray-300">
            <FaXTwitter />
          </a>
          <a href="https://www.facebook.com/semanto3521" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-gray-300">
            <FaFacebook />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      >
        <img
          src="https://i.ibb.co.com/zVcCZGWy/IMG-20220503-171314.jpg"
          alt="Your Name"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Hero;