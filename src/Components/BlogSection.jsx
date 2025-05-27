"use client";
import React, { useState, useEffect } from "react";

const BlogSection = () => {
  const [expandedBlog, setExpandedBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/data/blogs.json'); // Adjust the path if needed
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const toggleReadMore = (id) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };

  if (loading) {
    return (
      <div className="text-center text-white">
        <p>Loading blogs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-white">
        <p>Error loading blogs: {error}</p>
      </div>
    );
  }

  return (
    <section className="ml-64"> 
    <div id="Blogs" className=" w-full py-16 bg-[#0A0F1F] flex flex-col items-center px-4">
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
    </section>
  );
};

export default BlogSection;
