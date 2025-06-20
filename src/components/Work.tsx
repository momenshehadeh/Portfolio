import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  githubLink: string;
  technologies: string[];
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  demoLink,
  githubLink,
  technologies,
}) => (
  <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <img
      src={image}
      alt={title}
      className="w-full h-48 sm:h-56 object-cover"
    />
    <div className="p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm sm:text-base">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 sm:px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs sm:text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-800 text-sm sm:text-base"
        >
          <ExternalLink size={16} />
          <span>Live Demo</span>
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 text-sm sm:text-base"
        >
          <Github size={16} />
          <span>Source Code</span>
        </a>
      </div>
    </div>
  </div>
);

export default function Work() {
  const projects: ProjectProps[] = [
    {
      title: "Jawa Clinic",
      description: "A full-stack clinic website that revolutionizes the process of making doctor appointments.",
      image: "/img/JawaClinic.png",
      demoLink: "https://momenshehadeh.github.io/JawaClinicProject/",
      githubLink: "https://github.com/momenshehadeh/JawaClinicProject.git",
      technologies: ["React", "Spring Boot", "MongoDB", "Stripe"],
    },
    {
      title: "To Do App",
      description: "creating a Complete Todo Application with all features. We will do all the CRUD operations.",
      image: "/img/ToDoApp.png",
      demoLink: "https://wc-react-todo-app.netlify.app/",
      githubLink: "https://github.com/momenshehadeh/ToDoApp.git",
      technologies: ["React", "Framer Motion", "Redux"],
    },
    {
      title: "Recipe page",
      description: "This is a solution to the Recipe page challenge on Frontend Mentor.",
      image: "/img/RecipePage.jpeg",
      demoLink: "https://momenshehadeh.github.io/RecipePage/",
      githubLink: "https://github.com/momenshehadeh/RecipePage.git",
      technologies: ["HTML", "CSS"],
    },
    {
      title: "Mosthlk page",
      description: "Mosthlk is an online store that provides you with an easy and secure online shopping experience.",
      image: "/img/Mosthlk-logo.png",
      demoLink: "https://mosthlk.vercel.app/",
      githubLink: "https://github.com/momenshehadeh/Mosthlk.git",
      technologies: ["HTML", "CSS","JAVASCRIPT","REACT"],
    },
  ];

  return (
    <section className="py-12 sm:py-20 px-4" id="work">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
