"use client";
import { FaReact, FaGithub, FaCode } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-[#0A0F1F] text-white py-16 px-6">
     
       <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text uppercase tracking-wide mb-4 mt-4 text-center">
       About Me
      </h2>

      {/* Parent Container */}
      <div className="mx-auto flex flex-col md:flex-row items-stretch justify-center gap-8 max-w-7xl px-6">
        
        {/* Profile Image and Icons Section */}
        <div className="flex-1 bg-[#0D1326] p-6 rounded-lg shadow-lg flex flex-col items-center min-h-[416px]">
          <img
            src="https://i.ibb.co/7B9C5dN/1742086607598.jpg" 
            alt="Mehedi Hasan" 
            className="w-64 rounded-lg"
          />

          {/* Icons Section */}
          <div className="flex justify-center gap-4 mt-4">
            <FaReact size={40} className="text-blue-500" />
            <FaGithub size={40} className="text-gray-700" />
            <FaCode size={40} className="text-blue-400" />
          </div>
        </div>

        {/* About Content Section (Fixed Overflow Issue) */}
        <div className="w-full md:w-2/3 bg-[#0D1326] text-white p-6 rounded-lg shadow-lg flex flex-col min-h-[416px] overflow-y-auto">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <h2 className="text-xl font-bold mt-4">Hello :)</h2>

          <p className="mt-8 leading-relaxed">
            I'm  <strong className="text-xl "> Mehedi Hasan</strong>  A dedicated <strong className="text-xl"> Frontend Developer </strong> and <strong className=" text-xl">  MERN Stack Expert  </strong>
            passionate about crafting high-performance, scalable, and visually appealing web applications. 
            I specialize in <strong className="text-xl">React.js</strong>, along with full-stack development.
          
            I’m always open to exciting projects, collaborations, and new opportunities. Feel free to reach out on 
            <a href="+8801747874773" className=" underline"> WhatsApp  </a> to discuss how we can work together! 
             Thank you for visiting!
          </p>





          {/* Buttons Section */}
          <div className="flex gap-4 mt-auto justify-around">
            {/* Download CV Button */}
            <a 
              href="/your-cv.pdf" 
              download="Mehedi-Hasan-CV.pdf" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
