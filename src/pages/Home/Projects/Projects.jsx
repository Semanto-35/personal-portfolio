import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Service Review App",
      image: "https://i.ibb.co.com/bMFJqDsc/Screenshot-2025-02-05-192137.png",
      techStack: "React, Tailwind, Node.js, MongoDB Express",
      description: "The Service Review Application System is a platform that allows users to review and interact with various services. It helps users find reliable services by providing detailed feedback and ratings on categories like Web Hosting, Digital Marketing, Software Development, and more.",
      liveLink: "https://service-sphere-3137f.web.app/",
      githubLink: "https://github.com/Semanto-35/service-sphere-client",
      challenges: "Handling authentication and role-based access control.",
      improvements: "Adding AI-driven service recommendations."
    },
    {
      id: 2,
      name: "Pet Adoption Platform",
      image: "https://i.ibb.co.com/MyXvzNRf/Screenshot-2025-02-05-193349.png",
      techStack: "Next.js, Firebase, Express.js, Tailwind CSS",
      description: "Welcome to Pet Haven, a MERN Stack platform that helps connect pet lovers with pets in need of a forever home. Our mission is to make pet adoption easier and more accessible through technology.",
      liveLink: "https://paw-haven-39454.web.app/",
      githubLink: "https://github.com/Semanto-35/paw-haven-client",
      challenges: "Real-time updates for pet availability.",
      improvements: "Implementing a matching algorithm for better recommendations."
    },
    {
      id: 3,
      name: "Eco-Adventure Mountain Trek",
      image: "https://i.ibb.co.com/Cp5Rc4nY/IMG-20250205-195129.jpg",
      techStack: "React, Tailwind, Firebase, MongoDb,Express.js",
      description: "Eco-Adventure Mountain Trek is a dynamic trekking blog and booking platform that promotes eco-friendly travel experiences. The website showcases adventure trips such as mountain treks, ocean dives, wildlife safaris, and more.",
      liveLink: "https://tacit-nut.surge.sh/",
      githubLink: "https://github.com/Semanto-35/mountain-treking-adventure",
      challenges: "Optimizing performance for real-time order tracking.",
      improvements: "Adding AI-powered menu recommendations."
    }
  ];

  return (
    <section id="projects" className="py-16 max-w-7xl mx-auto bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={project.image} alt={project.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="mt-2 text-gray-300">{project.description}</p>
                <div className="mt-4 flex justify-between">
                  <a href={project.liveLink} target="_blank" className="text-blue-400 font-medium hover:underline">Live site view</a>
                  <a href={project.githubLink} target="_blank" className="text-gray-400 font-medium hover:underline">Resources</a>
                </div>
                <Link to={`details/${project.id}`} className="block mt-4 bg-purple-600 text-white font-medium text-center py-2 rounded-lg hover:bg-purple-700">
                  View More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;