"use client";
import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/data/projects.json'); // Adjust path if necessary
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-white">
        <p>Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-white">
        <p>Error loading projects: {error}</p>
      </div>
    );
  }

  return (
    <div id="projects" className="ml-48
    w-full bg-[#0A0F1F] flex flex-col items-center px-6 py-16">
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
