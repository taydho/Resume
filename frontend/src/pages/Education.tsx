// src/pages/Education.tsx
import React from 'react';

const Education: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white font-serif">
      <h4 className="text-5xl font-bold mb-4">Education</h4>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <h5 className="text-xl font-semibold">Washington State University</h5>
        </div>
        <div className="col-span-1 text-right">
          <h5 className="text-xl font-semibold">Pullman, Washington</h5>
        </div>
      </div>
      <hr className="border-b border-gray-400 my-2" />
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <p className="font-medium">Bachelor of Science in Computer Science</p>
        </div>
        <div className="col-span-1 text-right">
          <h5 className="text-xl font-semibold">December 15, 2023</h5>
        </div>
      </div>
    </div>
  );
};

export default Education;
