// src/pages/Projects.tsx
import React from 'react';
import Card from '../components/ProjCard';

const Projects: React.FC = () => {
  return (
    <div className="bg-primary text-white container mx-auto px-4 py-8 font-serif">
      <h4 className='text-5xl font-bold mb-4' >Projects</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className='h-full'>
      <Card
        year="2023"
        title="CEREO-Visualization-Tool"
        description="Client want a graph to display all the research affiliates."
        imageUrl="/WebAppOutline-04:04.png" 
        githubRepo="https://github.com/WSUCapstoneS2023/CPTS_421_16_CEREO-VisualizationTool"
      />
      </div>
      <div className='h-full'>
            <Card
        year="2023"
        title="This website"
        description="My corner of the internet."
        imageUrl="/Avatar.png" 
        githubRepo="https://github.com/taydho/Resume"
      />
      </div>
      <div className='h-full'>
            <Card
        year="2023"
        title="Instacart Market Basket Analysis"
        description="Machine learning project for me CptS_315."
        imageUrl="/FeaturesImportanceFigure5(Final).png" 
        githubRepo="https://github.com/taydho/InstaBasket"
      />
      </div>
      </div>
    </div>
  );
}

export default Projects;
