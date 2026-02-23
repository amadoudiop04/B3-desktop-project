import React, { useState } from 'react';
import './index.css';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { StatsPage } from './pages/statsPage';

const App: React.FC = () => {
  const [username] = useState('test');
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-[#061325] text-white flex flex-col">
      {currentPage === 'home' && <Header username={username} />}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'stats' && <StatsPage onNavigate={setCurrentPage} />}
      <Footer />
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};

export default App;

