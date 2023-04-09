import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Education from '../pages/Education';


const HeaderNavigation: React.FC = () => {
    return (
        
        <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      
);
}

export default HeaderNavigation;