"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+8801747874773"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-xl hover:bg-blue-600 transition duration-300 flex items-center justify-center w-14 h-14 animate-bounce"
    >
      <FaWhatsapp size={32} className="text-white" />
    </a>
  );
};

export default WhatsAppButton;
