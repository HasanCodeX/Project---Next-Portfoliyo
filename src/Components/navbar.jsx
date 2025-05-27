"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export default function Sidebar() {
  return (
    <div className="bg-[#0a0f1c] text-center p-4 w-full max-w-sm mx-auto shadow-lg rounded-xl fixed md:fixed top-0 left-0 h-screen md:w-80 md:pt-8 overflow-y-auto z-50 border-r border-blue-600 border-b border-t">
      <div className="space-y-2 text-sm md:text-base">
        <p className="text-gray-500"># programmer_life</p>
        <p className="text-gray-500"># hello_world</p>
        <p className="text-gray-500"># coding</p>
      </div>

      <h1 className="text-2xl  text-blue-400 md:text-3xl font-bold mt-4 ">Mehedi Hasan</h1>

      {/* <div className="flex justify-center mt-4">
        <Image
          src=""
          alt="profile"
          width={100}
          height={100}
          className="rounded-full border-4 border-white shadow-md"
        />
      </div> */}
      <div className="flex justify-center mt-4">
          <img
            src="https://i.ibb.co/7B9C5dN/1742086607598.jpg"
            alt="profile"
            width={300}
            height={100}
            className="rounded-full border-4 border-white shadow-md"
          />
        </div>

      <div className="flex items-center justify-center gap-1 text-sm text-gray-600 mt-2 ">
        <Mail size={14} />
        <p className=" text-blue-600">dev.hasan10@gmail.com</p>
      </div>

      <div className="space-y-2 mt-6 text-gray-700 font-medium ">
        <p className="cursor-pointer  text-blue-400 hover:text-blue-600">About</p>
        <p className="cursor-pointer  text-blue-400 hover:text-blue-600">Projects</p>
        <p className="cursor-pointer  text-blue-400 hover:text-blue-600">Blogs</p>
        <p className="cursor-pointer  text-blue-400 hover:text-blue-600">skills</p>
        <p className="cursor-pointer  text-blue-400 hover:text-blue-600">Contact</p>
       
      </div>

      <div className="flex flex-col items-center mt-6 space-y-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} className="hover:text-black" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} className="hover:text-blue-600" />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={24} className="hover:text-black" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} className="hover:text-pink-500" />
        </a>
        <a href="mailto:mittalsam98@gmail.com">
          <Mail size={24} className="hover:text-red-500" />
        </a>
      </div>

<br />


{/* <div className="bg-gray-900 p-4 rounded-lg flex justify-center items-center">
        <span className="text-4xl font-bold text-blue-400">MH</span>
      </div> */}
      {/* <p className="text-gray-500 text-xs mt-4">
        2024 COPYRIGHT | MEHEDI HASAN | ALL RIGHTS RESERVED
      </p> */}
    </div>
  );
}
