import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface StatsPageProps {
  onNavigate: (page: string) => void;
}

export const StatsPage: React.FC<StatsPageProps> = ({ onNavigate }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSettingsAction = (
    action: 'notifications' | 'settings' | 'profile' | 'help' | 'logout'
  ) => {
    setIsSettingsOpen(false);

    if (action === 'notifications') {
      console.log('Open notifications');
      return;
    }

    if (action === 'settings') {
      console.log('Open settings');
      return;
    }

    if (action === 'profile') {
      console.log('Open profile');
      return;
    }

    if (action === 'help') {
      console.log('Open help');
      return;
    }

    console.log('Logout');
  };

  const globalStats = [
    { label: 'GLOBAL K/D', value: '1.45', trend: '+4%', trendPositive: true },
    { label: 'TAUX DE VICTOIRE', value: '62%', trend: '+1.2%', trendPositive: true },
    { label: 'DÉGÂTS MOYENS', value: '28.4', trend: '+0.8%', trendPositive: true },
    { label: 'K/D/A MOYENS', value: '164', trend: '/ko', trendPositive: false },
  ];

  const topAgents = [
    {
      name: 'JETT',
      kd: '1.52',
      level: 18,
      matches: 142,
      progressColor: 'bg-cyan-500',
      image: 'https://static.wikia.nocookie.net/valorant/images/e/e3/Jett_Artwork_Full.png/revision/latest?cb=20220810202742',
    },
    {
      name: 'REYNA',
      kd: '1.38',
      level: 12,
      matches: 88,
      progressColor: 'bg-purple-500',
      image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/285726b9f66a2ab65a4f7f51f2acb8c6a33ec915-5120x1772.png?accountingTag=VAL',
    },
    {
      name: 'SAGE',
      kd: '1.25',
      level: 15,
      matches: 120,
      progressColor: 'bg-green-500',
      image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/58a180961a14beb631877921e647c233804853c1-616x822.png?accountingTag=VAL&auto=format&fit=fill&q=80&w=415',
    },
    {
      name: 'PHOENIX',
      kd: '1.42',
      level: 10,
      matches: 95,
      progressColor: 'bg-orange-500',
      image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/47387e354c34d51b84066bc47af3c5755b92b9c5-616x822.png?accountingTag=VAL&auto=format&fit=fill&q=80&w=415',
    },
    {
      name: 'OMEN',
      kd: '1.31',
      level: 8,
      matches: 67,
      progressColor: 'bg-indigo-500',
      image: 'https://img.redbull.com/images/c_crop,x_260,y_0,h_675,w_506/c_fill,w_450,h_600/q_auto,f_auto/redbullcom/2022/12/28/r4mgsw6smbegnyyacryr/omen-valorant',
    },
  ];

  const matchHistory = [
    {
      result: 'W',
      map: 'ASCENT',
      score: '13-8',
      agent: 'Jett',
      kda: '24/17/8 K/D/A',
      resultColor: 'bg-green-500',
      borderColor: 'border-green-500',
    },
    {
      result: 'L',
      map: 'e AVEN',
      score: '10-13',
      agent: 'Reyna',
      kda: '18/20/9 K/D/A',
      resultColor: 'bg-red-500',
      borderColor: 'border-red-500',
    },
    {
      result: 'W',
      map: 'BIND',
      score: '14-4',
      agent: 'Jett',
      kda: '21/8/11 K/D/A',
      resultColor: 'bg-green-500',
      borderColor: 'border-green-500',
    },
  ];

  return (
    <main className="flex-1 overflow-y-auto px-4 pb-20 bg-[#061325]">
      {/* Header */}
      <div className="flex items-center justify-center py-4 border-b border-gray-800 relative">
        <div className="absolute left-0">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            aria-label="Aller a l'accueil"
            className="w-10 h-10 bg-[#1e293b] rounded-full flex items-center justify-center border border-gray-700 hover:bg-gray-700 transition"
          >
            <span className="text-lg">🎮</span>
          </button>
        </div>
        <span className="text-sm font-bold tracking-wider">EA SPORTS // VALORANT</span>
        <div className="absolute right-0">
          <button
            type="button"
            onClick={() => setIsSettingsOpen((open) => !open)}
            aria-expanded={isSettingsOpen}
            aria-haspopup="menu"
            className="w-10 h-10 bg-[#1e293b] rounded-full flex items-center justify-center border border-gray-700 hover:bg-gray-700 transition"
          >
            <span className="text-lg">⚙️</span>
          </button>

          {isSettingsOpen && (
            <div
              role="menu"
              className="absolute right-0 mt-2 w-48 bg-[#111927] border border-gray-700 rounded-lg shadow-lg overflow-hidden z-20"
            >
              <button
                type="button"
                role="menuitem"
                onClick={() => handleSettingsAction('notifications')}
                className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 transition"
              >
                Notifications
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={() => handleSettingsAction('settings')}
                className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 transition"
              >
                Paramètres
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={() => handleSettingsAction('profile')}
                className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 transition"
              >
                Profil
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={() => handleSettingsAction('help')}
                className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 transition"
              >
                Aide
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={() => handleSettingsAction('logout')}
                className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-800 transition"
              >
                Déconnexion
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-6 bg-[#1e293b] rounded-2xl p-6 border border-gray-800"
      >
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
              <div className="w-full h-full rounded-full bg-[#1e293b] flex items-center justify-center text-4xl">
                👤
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs">
              ✓
            </div>
          </div>

          {/* Username */}
          <h1 className="text-2xl font-bold mb-2">B3-TEST</h1>
          
          {/* Rank Info */}
          <div className="flex items-center gap-2 mb-1">
            <span className="text-cyan-400 font-bold text-sm">RADIANT</span>
            <span className="text-gray-400 text-sm">• Record 840 RR</span>
          </div>
          <p className="text-xs text-gray-500 mb-4">RANG #162 AMÉRIQUE DU NORD</p>

          {/* Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2">
            <span>🌐</span>
            <span>Voir le classement mondial</span>
          </button>
        </div>
      </motion.div>

      {/* Global Stats */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6"
      >
        <h2 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">
          Statistiques Globales
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {globalStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#111927] rounded-xl p-4 border border-gray-800"
            >
              <p className="text-xs text-gray-400 mb-2">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p
                  className={`text-xs font-semibold ${
                    stat.trendPositive ? 'text-green-500' : 'text-gray-500'
                  }`}
                >
                  {stat.trend}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Top Agents */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6"
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            Agents les plus joués
          </h2>
          <button className="text-xs text-blue-500 hover:text-blue-400">
            VOIR TOUT
          </button>
        </div>

        <div className="space-y-3">
          {topAgents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-[#111927] rounded-xl p-4 border border-gray-800 hover:border-blue-500 transition cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {/* Agent Image */}
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex-shrink-0">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Agent Info */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">{agent.name}</h3>
                    <span className="text-green-400 font-semibold text-base">
                      {agent.kd} K/D
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700/40 rounded-full h-2 overflow-hidden mb-2">
                    <div
                      style={{ width: `${Math.min((agent.level / 20) * 100, 100)}%` }}
                      className={`h-full ${agent.progressColor} rounded-full`}
                    />
                  </div>

                  <p className="text-xs text-gray-400">
                    MAÎTRISE: NIVEAU {agent.level} • {agent.matches} MATCHS
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Match History */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 mb-4"
      >
        <h2 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">
          Historique des matchs
        </h2>

        <div className="space-y-2">
          {matchHistory.map((match, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              className={`bg-[#111927] rounded-lg p-3 border-l-4 ${match.borderColor} flex items-center gap-3`}
            >
              {/* Result Badge */}
              <div
                className={`w-10 h-10 ${match.resultColor} rounded-lg flex items-center justify-center font-bold text-lg`}
              >
                {match.result}
              </div>

              {/* Match Info */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-sm">{match.map}</h4>
                  <span className="text-sm font-semibold">{match.score}</span>
                </div>
                <p className="text-xs text-gray-400">
                  Agent {match.agent} • {match.kda}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
};