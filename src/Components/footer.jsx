"use client";
import { Twitter, Github, Linkedin } from "lucide-react";


const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0a0f1c] text-white py-8 px-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-700">
      {/* Left Side - Social Icons */}
      <div className="flex flex-col items-center md:items-start gap-3">
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/hasancodex/"
            aria-label="LinkedIn"
            className="bg-gray-800 p-2 rounded-full text-white hover:text-blue-400"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/HasanCodeX"
            aria-label="GitHub"
            className="bg-gray-800 p-2 rounded-full text-white hover:text-blue-400"
          >
            <Github size={20} />
          </a>
          <a
            href="https://x.com/HasanCodeX"
            aria-label="Twitter"
            className="bg-gray-800 p-2 rounded-full text-white hover:text-blue-400"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>

      {/* Center - Logo */}
      <div className="bg-gray-900 p-4 rounded-lg flex justify-center items-center">
        <span className="text-4xl font-bold text-blue-400">MH</span>
      </div>

      {/* Right Side - Navigation & Copyright */}
      <div className="text-center md:text-right">
        <ul className="flex flex-wrap gap-6 text-lg font-light justify-center md:justify-end">
          {["home", "about", "skills", "projects", "Blogs", "contacts"].map(
            (item) => (
              <li
                key={item} 
                className="hover:text-orange-400 cursor-pointer capitalize"
                onClick={() => scrollToSection(item)}
              >  {item}   /
              </li>
            )
          )}
        </ul>
        <p className="text-gray-400 text-xs mt-2 text-center">
          2024 COPYRIGHT <span className="px-2">|</span> MEHEDI HASAN{" "}
          <span className="px-2">|</span> ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
