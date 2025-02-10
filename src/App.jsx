import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/HomeSection/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="h-auto bg-gradient-to-r from-[#0d0d0d] to-50% to-[#303030] ">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Education />
      <Contact />
      
    </div>
  );
}

export default App;
