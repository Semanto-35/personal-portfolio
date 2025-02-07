import { FaFacebook, FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-scroll";


const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto bg-gray-800 text-white flex flex-col items-center gap-8 p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer  hover:text-purple-400">
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className="cursor-pointer  hover:text-purple-400">
          About
        </Link>
        <Link to="skills" smooth={true} duration={500} className="cursor-pointer  hover:text-purple-400">
          Skills
        </Link>
        <Link to="education" smooth={true} duration={500} className="cursor-pointer  hover:text-purple-400">
          Education
        </Link>
        <Link to="projects" smooth={true} duration={500} className="cursor-pointer  hover:text-purple-400">
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer  hover:text-purple-400">
          Contact
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
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
        </div>
      </nav>
      <aside>
        <p>Copyright &copy; {new Date().getFullYear()} My Portfolio - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;