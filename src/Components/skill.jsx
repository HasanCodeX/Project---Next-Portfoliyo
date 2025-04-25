
"use client";
import React from "react";
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaJsSquare } from "react-icons/fa";
import { SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiBootstrap } from "react-icons/si";

const SkillSection = () => {
  const skills = [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "HTML & CSS", icon: <FaHtml5 /> },
  ];

  return (
    <div id="skills" className="w-full py-12 md:py-16 bg-[#0A0F1F] flex flex-col items-center">
      
       <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text uppercase tracking-wide mb-4 mt-4 text-center">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl px-4 sm:px-6 md:px-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-5 sm:p-6 bg-[#0D1326] rounded-xl text-white text-center shadow-lg backdrop-blur-lg bg-opacity-90 
                       transition-transform duration-300 hover:-translate-y-2 hover:shadow-blue-500/40 flex flex-col items-center"
          >
            <div className="text-5xl sm:text-6xl text-blue-300">{skill.icon}</div>
            <p className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
