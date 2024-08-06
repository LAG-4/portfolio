import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/"><h1 className="text-xl font-bold text-white">Aryan Gupta</h1></a>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <a href="#about" className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              About
            </a>
            <a href="#experience" className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Experience
            </a>
            <a href="#projects" className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Projects
            </a>
            <a href="#contact" className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
