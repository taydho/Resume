// src/components/Footer.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond, faEnvelope, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-BlueDianne mt-8 flex-shrink-0 align-bottom">
      <div className="container mx-auto py-4 px-4 text-center">
        <div className="flex flex-wrap justify-center space-x-4 mb-2">
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faLinkedin} className="mr-1" />LinkedIn
          </a>
          <a href="mailto:youremail@example.com" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faEnvelope} className="mr-1" />Contact
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faTwitter} className="mr-1" />Twitter
          </a>
          <a href="https://joinhandshake.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faHandshake} className="mr-1" />Handshake
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faGithub} className="mr-1" />GitHub
          </a>
          <a href="https://taydho.netlify.app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faDiamond}  className="mr-1" />Netlify
          </a>
        </div>
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()} Tay Ho. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
