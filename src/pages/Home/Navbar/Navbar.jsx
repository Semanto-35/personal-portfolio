import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-7xl mx-auto fixed top-0 left-0 right-0 w-full bg-gray-800 shadow-md z-50 ">
      <div className="flex items-center justify-between p-4 shadow-2xl">
        <h1 className="text-2xl font-bold text-white">Portfolio.</h1>

        <div className="hidden md:block">
          <ul className="flex text-white items-center gap-6 font-medium">
            <li>
              <Link to="home" smooth={true} duration={500} className="cursor-pointer  hover:text-purple-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400">
                About
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400">
                Skills
              </Link>
            </li>
            <li>
              <Link to="education" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400">
                Education
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} className="cursor-pointer  hover:text-purple-400">
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="cursor-pointer  hover:text-purple-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <button className="hidden md:block bg-purple-600 text-white px-4 py-2 rounded-md text-center hover:bg-purple-700 cursor-pointer font-medium">
          <a href="/resume.pdf" download>Download Resume</a>
        </button>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
          {isOpen ? <HiOutlineX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4 text-center">
          <ul className="flex flex-col text-white items-center gap-4 font-medium mb-6">
            <li>
              <Link to="home" smooth={true} duration={500} className="cursor-pointer  hover:text-purple-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400">
                About
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400">
                Skills
              </Link>
            </li>
            <li>
              <Link to="education" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400">
                Education
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} className="cursor-pointer  hover:text-purple-400">
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="cursor-pointer  hover:text-purple-400">
                Contact
              </Link>
            </li>
          </ul>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-center hover:bg-purple-700 cursor-pointer font-medium">
            <a href="/resume.pdf" download >
              Download Resume
            </a>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;