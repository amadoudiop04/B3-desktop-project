// src/App.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";

const App = () => {
  const [username] = useState("test");
  const [expandedCompetition, setExpandedCompetition] = useState<number | null>(
    0
  );

  const competitions = [
    {
      id: 1,
      tag: "28 OCT - 1805 PRIX",
      time: "23 h",
      title: "EA SPORT SUMMER BLAST",
      description: "COMPÉTITION / ÉLIMINATION DIRECT",
    },
    {
      id: 2,
      tag: "29 OCT - 2500 PRIX",
      time: "18 h",
      title: "VALORANT CHAMPIONS CUP",
      description: "TOURNOI / GRAND PRIX",
    },
    {
      id: 3,
      tag: "30 OCT - 1200 PRIX",
      time: "15 h",
      title: "APEX LEGENDS INVITATIONAL",
      description: "COMPÉTITION / FINALE",
    },
    {
      id: 4,
      tag: "31 OCT - 3000 PRIX",
      time: "20 h",
      title: "TOURNAMENT FINALE SEASON",
      description: "TOURNOI / GRAND PRIX",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-[#0d1b2e] border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-sm">
            {username.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-xs text-gray-400">BIENVENUE,</p>
            <p className="font-bold">
              {username} <span className="text-blue-500">#LUG</span>
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="w-9 h-9 bg-[#1a2942] rounded-lg flex items-center justify-center hover:bg-[#243554] transition">
            🔔
          </button>
          <button className="w-9 h-9 bg-[#1a2942] rounded-lg flex items-center justify-center hover:bg-[#243554] transition">
            ⚙️
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 pb-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-4 bg-gradient-to-br from-[#1a2942] to-[#0d1b2e] rounded-2xl p-6 border border-gray-800"
        >
          <div className="flex items-start justify-between mb-3">
            <span className="inline-block">
              <span className="inline-flex items-center gap-1 animate-pulse">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span className="text-xs text-red-500 font-semibold">EN DIRECT</span>
              </span>
            </span>
          </div>
          <h1 className="text-2xl font-bold mb-1">
            VALORANT CHAMPIONS
            <br />
            TOUR
          </h1>
          <p className="text-sm text-gray-400 mb-4">
            GrandsFinals - Finale vs LOUD
          </p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition">
            ● Regarder Maintenant
          </button>
        </motion.section>

        {/* Performance Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">Aperçu des performances</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Radiant Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#1a2942] rounded-xl p-4 border border-gray-800 hover:border-blue-500 transition cursor-pointer"
            >
              <div className="w-12 h-12 bg-yellow-500 rounded-lg mb-2 flex items-center justify-center text-xl font-bold text-black">
                ◆
              </div>
              <p className="text-lg font-bold">Radiant</p>
              <p className="text-xs text-gray-400">RANG ACTUEL</p>
            </motion.div>

            {/* KDA Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#1a2942] rounded-xl p-4 border border-gray-800 hover:border-blue-500 transition cursor-pointer"
            >
              <p className="text-xs text-gray-400 mb-3">RATIO K/D</p>
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-2xl font-bold">1.45</p>
                  <p className="text-xs text-green-500">+0.05</p>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-full"
                    initial={{ width: 0 }}
                    animate={{ width: "72%" }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500">Excellent performance</p>
            </motion.div>
          </div>

          {/* Win Rate */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-4 bg-[#1a2942] rounded-xl p-4 border border-gray-800 hover:border-blue-500 transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">TAUX DE VICTOIRE</p>
                <p className="text-3xl font-bold">62.8%</p>
                <p className="text-xs text-gray-500">3ème plus haut du serveur</p>
              </div>
              <div className="relative w-20 h-20">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="3"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeDasharray="268"
                    strokeDashoffset="101"
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: 268 }}
                    animate={{ strokeDashoffset: 101 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Upcoming Competitions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Compétitions à venir</h2>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
            <AnimatePresence>
              {competitions.map((comp, index) => (
                <motion.div
                  key={comp.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(59, 130, 246, 0.2)" }}
                  className="flex-shrink-0 w-80 bg-gradient-to-br from-[#1a2942] to-[#0d1b2e] rounded-xl border border-gray-700 hover:border-blue-500 transition overflow-hidden cursor-pointer group"
                  onClick={() =>
                    setExpandedCompetition(
                      expandedCompetition === index ? null : index
                    )
                  }
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 border-b border-gray-700 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex gap-2 flex-wrap">
                        <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                          index === 0 ? 'bg-red-600/80 text-white' : 'bg-blue-600/80 text-white'
                        }`}>
                          {index === 0 ? '🔴 URGENT' : '📅 À VENIR'}
                        </span>
                        <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full text-gray-300">
                          {comp.time}
                        </span>
                      </div>
                      <motion.div
                        animate={{
                          rotate: expandedCompetition === index ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-blue-500 text-lg flex-shrink-0"
                      >
                        ▼
                      </motion.div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-bold text-base mb-1 group-hover:text-blue-400 transition">
                        {comp.title}
                      </h3>
                      <p className="text-xs text-gray-400">{comp.description}</p>
                    </div>

                    {/* Prize Preview */}
                    <div className="bg-[#0d1b2e]/50 rounded-lg p-3 border border-gray-700/50">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">💰 Cagnotte</span>
                        <span className="text-sm font-bold text-blue-400">
                          {comp.tag.split(" - ")[1]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {expandedCompetition === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-700 bg-[#0d1b2e]/50 backdrop-blur"
                      >
                        <div className="p-4 space-y-3">
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-[#1a2942] rounded-lg p-3 border border-gray-700/50">
                              <p className="text-xs text-gray-400 mb-1">🎯 Participants</p>
                              <p className="font-bold text-blue-400">
                                {128 + index * 50}
                              </p>
                            </div>
                            <div className="bg-[#1a2942] rounded-lg p-3 border border-gray-700/50">
                              <p className="text-xs text-gray-400 mb-1">⭐ Niveau</p>
                              <p className="font-bold text-purple-400">
                                {["Expert", "Pro", "Elite", "Master"][index]}
                              </p>
                            </div>
                          </div>
                          <p className="text-xs text-gray-300 leading-relaxed">
                            Compétition de haut niveau. Testez vos compétences et gagnez des récompenses exclusives!
                          </p>
                          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white py-2.5 rounded-lg text-sm font-semibold transition transform hover:scale-105">
                            S'INSCRIRE MAINTENANT
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Trending Shop */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 mb-4"
        >
          <h2 className="text-lg font-bold mb-3">Tendances Boutique</h2>

          <div className="grid grid-cols-2 gap-4">
            {/* Product 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#1a2942] rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition group cursor-pointer"
            >
              <div className="relative">
                <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold z-10">
                  NOUVEAU
                </span>
                <div className="h-40 bg-gradient-to-br from-slate-700 to-[#1a2942] flex items-center justify-center group-hover:from-slate-600 transition">
                  <img
                    src="https://lemaillotesport.com/wp-content/uploads/maillot-team-esport-personnalise-ssoj-avant-min.jpg"
                    alt="Shirt"
                    className="object-cover h-full"
                  />
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold mb-2 text-gray-300">
                  Pro-Kit Edition 24
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-500 font-bold text-lg">€64.99</span>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    className="text-gray-400 hover:text-white transition"
                  >
                    🛒
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Product 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#1a2942] rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition group cursor-pointer"
            >
              <div className="h-40 bg-gradient-to-br from-amber-900 to-[#1a2942] flex items-center justify-center group-hover:from-amber-800 transition">
                <img
                  src="https://www.genicado.com/177796-medium_default/casquette-sport-personnalisee-.jpg"
                  alt="Egg"
                  className="object-cover h-full "
                />
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold mb-2 text-gray-300">
                  Casquette "Stealth"
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-500 font-bold text-lg">€29.99</span>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    className="text-gray-400 hover:text-white transition"
                  >
                    🛒
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0d1b2e] border-t border-gray-800 px-2 py-3">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-1 text-blue-500 hover:text-blue-400 transition"
          >
            <span className="text-xl">🏠</span>
            <span className="text-xs font-semibold">Accueil</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition"
          >
            <span className="text-xl">📊</span>
            <span className="text-xs">Stats</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition"
          >
            <span className="text-xl">🎮</span>
            <span className="text-xs">Tournois</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition"
          >
            <span className="text-xl">🛍️</span>
            <span className="text-xs">Shop</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition"
          >
            <span className="text-xl">👤</span>
            <span className="text-xs">Profil</span>
          </motion.button>
        </div>
      </nav>
    </div>
  );
};

export default App;
