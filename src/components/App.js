import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import ProjectList from "./components/ProjectList";

// Example project data
const projectData = [
  {
    id: 1,
    name: "Portfolio Site",
    about: "A personal website to showcase my work.",
    technologies: ["React", "Tailwind", "JavaScript"],
  },
  {
    id: 2,
    name: "Weather App",
    about: "A weather forecasting app.",
    technologies: ["React", "API", "CSS"],
  },
];

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <ProjectList projects={projectData} />
    </div>
  );
}

export default App;
