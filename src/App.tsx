import React, { useState } from 'react';
import './index.css';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';

const App: React.FC = () => {
  const [username] = useState('Amadou');

  return (
    <div className="min-h-screen bg-[#061325] text-white flex flex-col">
      <Header username={username} />
      <HomePage />
      <Navigation />
    </div>
  );
};

export default App;

