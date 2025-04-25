"use client";
import React, { useState } from "react";


const BlogSection = () => {
  const [expandedBlog, setExpandedBlog] = useState(null);

  const blogs = [
    { 
      id: "01", 
      title: "Getting Started with React", 
      icon: "https://cdn-icons-png.flaticon.com/512/875/875209.png", 
      description: "A beginner's guide to understanding and using React.js effectively.",
      fullContent: "React is a popular JavaScript library for building user interfaces. It helps developers create fast and scalable applications using a component-based architecture."
    },
    { 
      id: "02", 
      title: "Mastering Tailwind CSS", 
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", 
      description: "Learn how to build beautiful and responsive UIs with Tailwind CSS.",
      fullContent: "Tailwind CSS is a utility-first CSS framework that enables developers to create stunning designs with minimal effort."
    },
    { 
      id: "03", 
      title: "JavaScript DOM Manipulation", 
      icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png", 
      description: "Understand how to dynamically update and modify your web pages using JavaScript DOM.",
      fullContent: "JavaScript DOM manipulation allows developers to update and interact with elements on a webpage dynamically."
    },
    { 
      id: "04", 
      title: "Optimizing Web Performance", 
      icon: "https://cdn-icons-png.flaticon.com/512/846/846486.png", 
      description: "Boost the speed and efficiency of your websites with performance optimization techniques.",
      fullContent: "Optimizing web performance involves techniques like lazy loading, caching, and minifying assets to enhance the user experience."
    },
  ];

  const toggleReadMore = (id) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };

  return (
    <div id="Blogs" className="w-full py-16 bg-[#0A0F1F] flex flex-col items-center px-4">
      <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text uppercase tracking-wide mb-4 mt-4 text-center">
        My Blogs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl w-full">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="p-6 bg-[#0D1326] bg-opacity-100 rounded-xl text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50 flex flex-col items-center"
          >
            {/* Blog Icon */}
            <div className="w-16 h-16 flex items-center justify-center">
              <img src={blog.icon} alt={blog.title} className="w-full h-full object-contain rounded-lg shadow-md" />
            </div>
            
            {/* Blog Title */}
            <h3 className="text-2xl font-semibold mt-4 uppercase tracking-wide text-white">{blog.title}</h3>
            
            {/* Blog Description */}
            <p className="text-md text-gray-300 mt-2 max-h-40 overflow-auto px-2 text-sm">
              {expandedBlog === blog.id ? blog.fullContent : blog.description}
            </p>
            
            {/* Read More Button */}
            <button 
              className="mt-4 px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md hover:opacity-80 transition-all"
              onClick={() => toggleReadMore(blog.id)}
            >
              {expandedBlog === blog.id ? "Show Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
