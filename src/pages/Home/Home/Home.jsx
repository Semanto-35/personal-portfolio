import About from "../About/About";
import Hero from "../Banner/Hero";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";


const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
    </div>
  );
};

export default Home;