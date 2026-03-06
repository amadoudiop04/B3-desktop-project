import React, { useState } from 'react';
import './index.css';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { AuthPage } from './middleware/AuthPage';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { StatsPage } from './pages/statsPage';

const AppContent = () => {
  const { user, logout, isLoading } = useAuth();
  const [currentPage, setCurrentPage] = useState('home');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a1628] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AuthPage />;
  }

  return (
    <div className="min-h-screen bg-[#061325] text-white flex flex-col">
      {currentPage === 'home' && <Header username={user.username} />}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'stats' && <StatsPage user={user} onNavigate={setCurrentPage} />}
      <Footer />
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;

