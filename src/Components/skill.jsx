"use client";
import React, { useState, useEffect } from "react";
// Importing icons from react-icons
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaJsSquare } from "react-icons/fa";
import { SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiBootstrap } from "react-icons/si";

const SkillSection = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mapping the icon names to their respective components
  const iconMapping = {
    SiMongodb: <SiMongodb />,
    SiExpress: <SiExpress />,
    FaReact: <FaReact />,
    FaNodeJs: <FaNodeJs />,
    FaJsSquare: <FaJsSquare />,
    SiFirebase: <SiFirebase />,
    SiTailwindcss: <SiTailwindcss />,
    SiBootstrap: <SiBootstrap />,
    FaGitAlt: <FaGitAlt />,
    FaHtml5: <FaHtml5 />,
  };

  useEffect(() => {
    // Fetch the skills data from the public folder
    const fetchSkills = async () => {
      try {
        const response = await fetch('/data/skills.json'); // Adjust the path if necessary
        if (!response.ok) {
          throw new Error('Failed to fetch skills');
        }
        const data = await response.json();
        setSkills(data); // Set the fetched data in state
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        setError(error.message); // Set error state if any
        setLoading(false); // Set loading to false even on error
      }
    };

    fetchSkills(); // Call the function to fetch data
  }, []);

  if (loading) {
    return (
      <div className="text-center text-white">
        <p>Loading skills...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-white">
        <p>Error loading skills: {error}</p>
      </div>
    );
  }

  return (   
     <section className="ml-64"> 
    <div id="skills" className="w-full py-12 md:py-16 bg-[#0A0F1F] flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text uppercase tracking-wide mb-4 mt-4 text-center">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl px-4 sm:px-6 md:px-8">
        {skills.map((skill, index) => {
          // Use the iconMapping to fetch the correct icon component by name
          const IconComponent = iconMapping[skill.icon];

          return (
            <div
              key={index}
              className="p-5 sm:p-6 bg-[#0D1326] rounded-xl text-white text-center shadow-lg backdrop-blur-lg bg-opacity-90 
                         transition-transform duration-300 hover:-translate-y-2 hover:shadow-blue-500/40 flex flex-col items-center"
            >
              <div className="text-5xl sm:text-6xl text-blue-300">{IconComponent}</div>
              <p className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
        </section>
  );
};

export default SkillSection;
