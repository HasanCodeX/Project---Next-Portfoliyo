"use client";
import { Typewriter } from "react-simple-typewriter";
import { CodeXml } from "lucide-react";

export default function Banner() {
  return (
    <div id="home" className="relative min-h-screen bg-[#0A0F1F] flex items-center justify-center text-white">
      <div className="text-center">
        <div className="relative w-64 h-64 mx-auto">
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-400 blur-2xl opacity-50"></div>
          {/* 3D Ring Illustration */}
          <div className="relative w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-pink-500 p-2 flex items-center justify-center">
            <div className="w-48 h-48 bg-[#0A0F1F] rounded-full border-[10px] border-transparent border-opacity-20 shadow-xl">
              <div className="flex justify-center items-center py-10">
                <CodeXml className="w-20 h-20" />
              </div>
            </div>
          </div>
        </div>
        {/* Text Section */}
        <h1 className="text-5xl font-bold mt-2">MEHEDI HASAN</h1>

        <p className="text-lg tracking-wide mt-2 font-medium">
          <Typewriter
            words={[
              "I AM WEB DEVELOPER",
              "I AM FRONTEND ENGINEER",
              "I AM REACT SPECIALIST",
              "I AM FULL STACK DEVELOPER",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </div>
    </div>
  );
}
