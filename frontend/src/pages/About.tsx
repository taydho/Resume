// src/pages/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white font-serif">
      <h4 className="text-5xl font-bold mb-4">About me</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <p className="my-4">
          Hey there, I'm Tay Ho, a Computer Science student at Washington State University. This is my personal corner of the internet, where I share my latest projects, skills, and experiences as I navigate the exciting world of tech.
          </p>
          <p className="my-4">
          Whether it's building websites, developing apps, or exploring the latest technologies, I'm always eager to learn and grow. So if you're a fellow developer, a tech enthusiast, or just curious about what I'm up to, feel free to take a look around and see what I'm working on.
          </p>
          <p className="my-4">
          From personal projects to academic coursework, I'll be sharing a variety of content here, along with insights into my journey as a tech enthusiast. So if you're interested in following my progress and staying up-to-date on my latest discoveries, be sure to check back often for updates.
          </p>
          <h5 className="text-xl font-semibold text">Software</h5>
          <hr className="border-b border-gray-400 my-2" />
          <ul className="list-disc list-inside mt-2">
            <li>This website use vite framework</li>
            <li>Experience in javascript, node.js, css, html, and python</li>
            <li>Coding: Visual studio code with github copilot</li>
            <li>Utilizing Python for data processing, analysis, and visualization tasks, utilizing libraries such as NumPy and Pandas.</li>
          </ul>
          <h5 className="text-xl font-semibold">Hobbies</h5>
          <hr className="border-b border-gray-400 my-2" />
          <ul className="list-disc list-inside mt-2">
            <li>Listen to podcast</li>
            <li>Reading book: fiction, self-help, philosophy, manga</li>
            <li>3D printing</li>
            <li>My longest bike ride is 60 miles in one day.</li>
          </ul>
          <h5 className="text-xl font-semibold">Interest</h5>
          <hr className="border-b border-gray-400 my-2" />
          <ul className="list-disc list-inside mt-2">
            <li>New technologies</li>
            <li>I enjoy giving back to the community. I volunteer regularly at Chua Giac Vien, a local Buddhist temple.</li>
            <li>I enjoy story-telling games and card games.</li>
          </ul>
          <p className="my-4">
            Thank you for taking the time to read my About Me page. If you have any questions or would like to learn more about my work, please feel free to contact me or check out my projects. I look forward to connecting with you!
          </p>
        </div>
        <div className="md:col-span-1">
          <div className="bg-secondary p-4 rounded-lg shadow-md">
            <h5 className="text-xl font-semibold mb-2">Your Picture Title</h5>
            <img src="../../public/Avatar.png" alt="Avatar" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
