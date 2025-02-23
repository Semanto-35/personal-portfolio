import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
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

  const project = projects.find(pro => pro.id == id);

  if (!project) {
    return <div className="text-center text-white py-20">Project not found.</div>;
  }



  return (
    <section className="max-w-7xl mx-auto px-6 bg-gray-900 pt-32 pb-16 text-white">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {project.name}
      </motion.h1>
      <motion.img
        src={project.image}
        alt={project.name}
        className="w-full h-96 object-cover rounded-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <p className="text-lg mb-4">{project.description}</p>
      <p className="text-md mb-2"><strong>Tech Stack:</strong> {project.techStack}</p>
      <p className="text-md mb-2"><strong>Challenges:</strong> {project.challenges}</p>
      <p className="text-md mb-4"><strong>Improvements:</strong> {project.improvements}</p>
      <div className="flex gap-4">
        <a href={project.liveLink} className="bg-purple-600 py-2 px-4 rounded-lg hover:bg-purple-700" target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href={project.githubLink} className="bg-gray-700 py-2 px-4 rounded-lg hover:bg-gray-800" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
};

export default ProjectDetails;