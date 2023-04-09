// src/components/Card.tsx
import React from 'react';

interface CardProps {
  year: string;
  title: string;
  description: string;
  imageUrl: string;
  githubRepo: string;
}

const Card: React.FC<CardProps> = ({ year, title, description, imageUrl, githubRepo }) => {
  return (
    <div className="bg-card shadow-md rounded-md p-4 border border-gray flex flex-col h-full">
      <div className="text-teal font-bold text-lg mb-2">{year}</div>
      <h2 className="text-xl font-semibold mb-4 flex-grow">{title}</h2>
      <img className="w-full h-48 object-cover mb-4 rounded-md" src={imageUrl} alt={title} />
      <p className="text-gray-400">{description}</p>
      <a href={githubRepo} target="_blank" rel="noopener noreferrer" className="text-white bg-gray hover:text-secondary mt-4 inline-block border border-secondary rounded-md py-2 px-4">
        View on GitHub
      </a>
    </div>
  );
};

export default Card;
