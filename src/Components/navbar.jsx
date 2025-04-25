"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import About from "./about";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="border border-white bg-[#0D1326] mt-6 rounded-4xl max-w-7xl w-full py-4 fixed top-0 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center px-6 md:px-20 shadow-md">

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-400 absolute left-6 z-50 "
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Menu */}

      <div className="relative flex items-center justify-center w-full">
        <ul
          className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-[#0A0F1F] md:bg-transparent flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16 text-gray-400 uppercase text-sm tracking-widest font-semibold transition-all duration-300 ease-in-out ${
            isOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <li
            className="hover:text-orange-400 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>
          <li
            className="hover:text-orange-400 cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li
            className="hover:text-orange-400 cursor-pointer"
            onClick={() => scrollToSection("skills")}
          >
            skills
          </li>
          
         
<li className="hover:text-orange-400 cursor-pointer hidden md:block">
  <pre>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </pre>
</li>






          <li
            className="hover:text-orange-400 cursor-pointer"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </li>
          <li
            className="hover:text-orange-400 cursor-pointer"
            onClick={() => scrollToSection("Blogs")}
          >
            Blogs
          </li>
          <li
            className="hover:text-orange-400 cursor-pointer"
            onClick={() => scrollToSection("contacts")}
          >
            Contacts
          </li>
        </ul>

        {/* Always Centered Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-bold text-blue-400">
          MH
        </div>
      </div>
    </nav>
  );
}
