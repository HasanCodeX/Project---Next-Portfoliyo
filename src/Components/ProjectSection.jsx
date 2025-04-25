"use client";
import React from "react";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectSection = () => {
  const projects = [
    { 
      id: "01", 
      name: "Pet House", 
      logo: "https://cdn-icons-png.flaticon.com/512/616/616430.png", 
      description: "The most expanded application I had the opportunity to work on. My code was reviewed by an awesome curator. The application handles all adoption processes and allows storing all evidence on adopting animals from the animal shelter.",
      liveLink: "https://github.com/HasanCodeX/web-b11-A3",
      githubLink: "https://github.com/HasanCodeX/web-b11-A3"
    },
    { 
      id: "02", 
      name: "Kids School", 
      logo: "https://cdn-icons-png.flaticon.com/512/3202/3202926.png", 
      description: "Personal project for a study subject. I've earned an A+ grade :)",
      liveLink: "https://github.com/HasanCodeX/web-b11-A2",
      githubLink: "https://github.com/HasanCodeX/web-b11-A2"
    },
    { 
      id: "03", 
      name: "Bangladesh 2.0", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg", 
      description: "A comprehensive project aimed at showcasing the beauty and culture of Bangladesh. This project involved creating an interactive and visually appealing website using modern web technologies. It was a great learning experience in web development and design.",
      liveLink: "https://github.com/HasanCodeX/web-b11-A1",
      githubLink: "https://github.com/HasanCodeX/web-b11-A1"
    },
    { 
      id: "04", 
      name: "English Janala", 
      logo: "https://cdn-icons-png.flaticon.com/512/2795/2795731.png", 
      description: "A web application to help users learn English efficiently through interactive exercises and lessons. Built with modern frontend technologies for a seamless learning experience.",
      liveLink: "https://github.com/HasanCodeX/english-janala",
      githubLink: "https://github.com/HasanCodeX/english-janala"
    },
  ];

  return (
    <div id="projects" className="w-full  bg-[#0A0F1F] flex flex-col items-center  px-6 py-16">
      
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text uppercase tracking-wide mb-4 mt-4 text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 bg-[#0D1326] bg-opacity-100 rounded-xl text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50 flex flex-col items-center max-h-[420px] overflow-hidden"
          >
            {/* Project Image */}
            <div className="w-20 h-20 flex items-center justify-center">
              <img src={project.logo} alt={project.name} className="w-full h-full object-contain rounded-lg shadow-md" />
            </div>
            
            {/* Project Name */}
            <h3 className="text-2xl font-semibold mt-4 uppercase tracking-wide text-white">{project.name}</h3>
            
            {/* Project Description */}
            <p className="text-md text-gray-300 mt-2 max-h-40 overflow-auto px-2 text-sm">
              {project.description}
            </p>
            
            {/* Buttons */}
            <div className="flex justify-center mt-4 space-x-4">
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md transition"
              >
                Live <FaExternalLinkAlt className="text-white text-lg" />
              </a>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-md transition"
              >
                Code <FaGithub className="text-white text-lg" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
