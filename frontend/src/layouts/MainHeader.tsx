import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const MainHeader: React.FC = () => {
  return (
    <header className="bg-primary border-b border-gray-600 text-white">
      <div />
      <div className="py-5" />
      <div className="container mx-auto px-4 text-5xl font-normal">Tay Ho</div>
      <nav className="container mx-auto px-4">
        <ul className="flex items-center space-x-10">
          <li className="py-2 group">
            <Link to="/" className="hover:text-SilverChalice">
              <span className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300">
                About
              </span>
            </Link>
          </li>
          <li className="py-2 group">
            <Link to="/projects" className="hover:text-SilverChalice">
              <span className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300">
                Projects
              </span>
            </Link>
          </li>
          <li className="py-2 group">
            <Link to="/education" className="hover:text-SilverChalice">
              <span className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300">
                Education
              </span>
            </Link>
          </li>
          <li className="py-2 group">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-SilverChalice">
              <span className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300">
                GitHub
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
