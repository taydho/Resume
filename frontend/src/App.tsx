// src/App.tsx
import React from 'react';
import MainHeader from './layouts/MainHeader';
import Footer from './layouts/Footer';
import HeaderNavigation from './navigation/HeaderNavigation';
import { BrowserRouter as Router } from 'react-router-dom';
const App: React.FC = () => {
  return (
    <Router>
    <div className='bg-primary min-h-screen flex flex-col'>
      <MainHeader />
      <main className="pt-4 flex-grow">
      <HeaderNavigation />
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
