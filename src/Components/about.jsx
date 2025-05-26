"use client";
import { useEffect, useState } from "react";
import { FaReact, FaGithub, FaCode } from "react-icons/fa";

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    // Fetch data from public/data folder
    fetch("/data/about.json")
      .then((res) => res.json())
      .then((data) => setAboutData(data));
  }, []);

  if (!aboutData) return <p className="text-white text-center py-10">Loading...</p>;

  return (
    <section id="about" className="bg-[#0A0F1F] text-white py-16 px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text uppercase tracking-wide mb-4 mt-4 text-center">
        About Me
      </h2>

      <div className="ml-124 mx-auto flex flex-col md:flex-row items-stretch justify-center gap-8 max-w-7xl px-6">
        {/* Profile Image and Icons */}
        <div className="flex-1 bg-[#0D1326] p-6 rounded-lg shadow-lg flex flex-col items-center min-h-[416px]">
          <img
            src={aboutData.image}
            alt={aboutData.name}
            className="w-64 rounded-lg"
          />
          <div className="flex justify-center gap-4 mt-4">
            <FaReact size={40} className="text-blue-500" />
            <FaGithub size={40} className="text-gray-700" />
            <FaCode size={40} className="text-blue-400" />
          </div>
        </div>

        {/* About Text */}
        <div className="w-full md:w-2/3 bg-[#0D1326] text-white p-6 rounded-lg shadow-lg flex flex-col min-h-[416px] overflow-y-auto">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <h2 className="text-xl font-bold mt-4">Hello :)</h2>

          <p className="mt-8 leading-relaxed">
            {aboutData.description} Feel free to reach out on{" "}
            <a href={`https://wa.me/${aboutData.whatsapp}`} className="underline">
              WhatsApp
            </a>{" "}
            to discuss how we can work together!
          </p>

          <div className="flex gap-4 mt-auto justify-around">
            <a
              href={aboutData.cvLink}
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
