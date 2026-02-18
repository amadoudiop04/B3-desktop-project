// src/App.tsx
import React from 'react';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-[#0d1b2e]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-sm">👤</span>
          </div>
          <div>
            <p className="text-xs text-gray-400">BIENVENUE</p>
            <p className="font-bold">Amadou <span className="text-blue-500">#LUG</span></p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="w-9 h-9 bg-[#1a2942] rounded-lg flex items-center justify-center hover:bg-[#243554]">
            🔔
          </button>
          <button className="w-9 h-9 bg-[#1a2942] rounded-lg flex items-center justify-center hover:bg-[#243554]">
            ⚙️
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 pb-20">
        {/* Hero Section */}
        <section className="mt-4 bg-gradient-to-br from-[#1a2942] to-[#0d1b2e] rounded-2xl p-6 border border-gray-800">
          <h1 className="text-2xl font-bold mb-1">VALORANT CHAMPIONS<br/>TOUR</h1>
          <p className="text-sm text-gray-400 mb-4">GrandsFinals - Finale vs LOUD</p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2">
            ▶ Regarder Maintenant
          </button>
        </section>

        {/* Performance Overview */}
        <section className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">Aperçu des performances</h2>
            <button className="text-xs text-blue-500">Détails complets →</button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Radiant Card */}
            <div className="bg-[#1a2942] rounded-xl p-4 border border-gray-800">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg mb-2 flex items-center justify-center text-2xl">
                ◆
              </div>
              <p className="text-lg font-bold">Radiant</p>
              <p className="text-xs text-gray-400">RANG ACTUEL</p>
            </div>

            {/* KDA Card */}
            <div className="bg-[#1a2942] rounded-xl p-4 border border-gray-800">
              <p className="text-xs text-gray-400 mb-1">RATIO K/D</p>
              <p className="text-3xl font-bold">1.45</p>
              <p className="text-xs text-green-500">+0.05</p>
            </div>
          </div>

          {/* Win Rate */}
          <div className="mt-4 bg-[#1a2942] rounded-xl p-4 border border-gray-800 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400">TAUX DE VICTOIRE</p>
              <p className="text-3xl font-bold">62.8%</p>
            </div>
            <div className="w-20 h-20 rounded-full border-4 border-blue-500 border-t-transparent rotate-45"></div>
          </div>
        </section>

        {/* Upcoming Competitions */}
        <section className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">Compétitions à venir</h2>
            <button className="text-blue-500">→</button>
          </div>
          
          <div className="bg-[#1a2942] rounded-xl p-4 border border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs bg-blue-600 px-2 py-1 rounded">TOURNOI FIFA</span>
              <span className="text-xs text-gray-400">18:32</span>
            </div>
            <h3 className="font-bold mb-1">EA SPORT SUMMER BLAST</h3>
            <p className="text-xs text-gray-400 mb-3">COMPÉTITION / GRAND PRIX</p>
            <button className="w-full bg-[#0d1b2e] hover:bg-[#162234] text-white py-2 rounded-lg text-sm font-semibold">
              S'INSCRIRE
            </button>
          </div>
        </section>

        {/* Trending Shop */}
        <section className="mt-6 mb-4">
          <h2 className="text-lg font-bold mb-3">Tendances Boutique</h2>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Product 1 */}
            <div className="bg-[#1a2942] rounded-xl overflow-hidden border border-gray-800">
              <div className="relative">
                <span className="absolute top-2 left-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded font-bold">
                  -15% OFF
                </span>
                <div className="h-32 bg-gradient-to-br from-blue-900 to-[#1a2942] flex items-center justify-center">
                  <div className="text-6xl">👕</div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold mb-1">Pro Kit Libéro 04</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-500 font-bold">€64.99</span>
                  <button className="text-gray-400 hover:text-white">🛒</button>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-[#1a2942] rounded-xl overflow-hidden border border-gray-800">
              <div className="h-32 bg-gradient-to-br from-amber-900 to-[#1a2942] flex items-center justify-center">
                <div className="text-6xl">🥚</div>
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold mb-1">Coquille "Roaahl"</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-500 font-bold">€56.99</span>
                  <button className="text-gray-400 hover:text-white">🛒</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0d1b2e] border-t border-gray-800 px-2 py-3">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1 text-blue-500">
            <span className="text-xl">🏠</span>
            <span className="text-xs font-semibold">Accueil</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white">
            <span className="text-xl">📊</span>
            <span className="text-xs">Stats</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white">
            <span className="text-xl">👥</span>
            <span className="text-xs">Équipes</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white">
            <span className="text-xl">🎲</span>
            <span className="text-xs">Parier</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white">
            <span className="text-xl">👤</span>
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default App;