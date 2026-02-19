import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-4 bg-[url('https://i.redd.it/champions-seoul-transition-screens-for-desktop-wallpapers-v0-g3rj3fbqdfod1.jpg?width=4096&format=pjpg&auto=webp&s=c37f06a38ee0f21cda9107cebbd6d54128fbb1bb')] bg-cover bg-center rounded-2xl p-6 border border-gray-800"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="inline-block">
          <span className="inline-flex items-center gap-1 animate-pulse">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="text-xs bg-red-500 bg-opacity-30 rounded-full text-white-500 font-semibold px-3 py-1">EN DIRECT</span>
          </span>
        </span>
      </div>
      <h1 className="text-2xl font-bold mb-1">
        VALORANT CHAMPIONS
        <br />
        TOUR
      </h1>
      <p className="text-sm text-gray-400 mb-4">GrandsFinals - Finale vs LOUD</p>
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition">
        ● Regarder Maintenant
      </button>
    </motion.section>
  );
};
