// src/pages/Projects.tsx
import React from 'react';
import Card from '../components/ProjCard';

const Projects: React.FC = () => {
  return (
    <div className="bg-primary text-white text-3x px-7">
      <h4 className='text-7xl px-2 font-sans' >Projects</h4>
      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className='h-full'>
      <Card
        year="2023"
        title="CEREO-Visualization-Tool"
        description="Client want a graph to display all the research affiliates."
        imageUrl="../../public/WebAppOutline-04:04.png" // Replace this with the correct image path
        githubRepo="https://github.com/WSUCapstoneS2023/CPTS_421_16_CEREO-VisualizationTool"
      />
      </div>
      <div className='h-full'>
            <Card
        year="2023"
        title="This website"
        description="My corner of the internet."
        imageUrl="../../public/Avatar.png" // Replace this with the correct image path
        githubRepo="https://github.com/taydho/Resume"
      />
      </div>

      </div>
    </div>
    </div>
  );
}

export default Projects;
