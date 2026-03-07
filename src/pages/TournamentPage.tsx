import React from 'react';

interface Team {
  id: string;
  name: string;
  region: string;
  status: 'open' | 'in-progress' | 'closed';
  startTime?: string;
  prizePool?: string;
  participants?: number;
  rotation?: string;
}

interface TournamentPageProps {
  onNavigate?: (page: string) => void;
}

const TournamentPage: React.FC<TournamentPageProps> = ({ onNavigate }) => {
  const teams: Team[] = [
    {
      id: '1',
      name: 'RED BULL HOME GROUND',
      region: 'DÉBUT DANS',
      status: 'open',
      startTime: '04:12:44',
      participants: 12,
      rotation: '$50,000'
    },
    {
      id: '2',
      name: 'SENTINELS',
      region: 'TEAM',
      status: 'open',
      participants: 13
    },
    {
      id: '3',
      name: 'FINATIC',
      region: 'TEAM',
      status: 'open',
      participants: 0
    },
    {
      id: '4',
      name: 'LOUD',
      region: 'TEAM',
      status: 'open',
      participants: 9
    },
    {
      id: '5',
      name: 'ZETA',
      region: 'TEAM',
      status: 'open',
      participants: 0
    }
  ];

  const treeData = [
    { label: 'SENTINELS', value: '13', featured: true },
    { label: 'FINATIC', value: '', featured: true },
    { label: 'LOUD', value: '9', featured: false },
    { label: 'ZETA', value: '', featured: false }
  ];

  const otherStats = [
    { label: 'ZETA', value: '' }
  ];

  return (
    <div className="min-h-screen bg-[#061325] text-white p-6 pb-20">
      {/* Back Button */}
      {onNavigate && (
        <button
          onClick={() => onNavigate('home')}
          className="mb-6 text-blue-400 hover:text-blue-300 transition font-semibold flex items-center gap-2"
        >
          ← Retour à l'accueil
        </button>
      )}
      {/* Header Section */}
      <div className="max-w-5xl mx-auto ">
        {/* Main Tournament Card */}
        <div 
          className="border border-slate-700 rounded-2xl p-8 mb-8 bg-[#111927] bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage: 'url(https://www.lequipe.fr/_medias/img-photo-jpg/trois-clubs-francais-evolueront-dans-le-valorant-champions-tour-en-2025-c-young-wolff-riot-games/1500000002126421/0:0,2000:1333-828-552-75/51b38.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061325]/95 to-[#061325]/85 rounded-2xl"></div>
          
          {/* Content */}
          <div className="relative z-10">
          {/* Tournament Title */}
          <div className="mb-6">
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold mb-4 tracking-wider">
              ● MAJEUR EN DIRECT
            </div>
            <h1 className="text-6xl font-black mb-3 leading-tight text-white">
              TOURNÉE DES<br />CHAMPIONS:<br />FINALES DE BERLIN
            </h1>
            <p className="text-blue-400 text-xl font-bold">
              250 000 $ de dotation
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors">
              VOIR L'ARBRE
            </button>
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-bold transition-colors border border-slate-700">
              REGARDER LE DIRECT
            </button>
          </div>

          {/* Tournament Status */}
          <div className="flex gap-2">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-xs">
              ● À VENIR
            </button>
            <button className="bg-slate-800 text-slate-400 px-6 py-2 rounded-full font-bold text-xs">
              EN COURS
            </button>
            <button className="bg-slate-800 text-slate-400 px-6 py-2 rounded-full font-bold text-xs">
              TERMINÉ
            </button>
          </div>
          </div>
        </div>

        {/* Qualifications Section */}
        <div className="border border-slate-700 rounded-2xl p-8 mb-8 bg-[#111927]">
          <h2 className="text-blue-400 text-xs font-bold tracking-widest mb-8 uppercase">
            ◆ QUALIFICATIONS RÉGIONALES
          </h2>

          {/* RED BULL HOME GROUND Card */}
          <div className="border border-slate-700 rounded-2xl p-6 mb-6 bg-slate-800/30 backdrop-blur-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-2xl flex-shrink-0">
                  🛡️
                </div>
                <div>
                  <h3 className="font-black text-xl leading-tight">RED BULL HOME<br />GROUND</h3>
                  <p className="text-green-500 text-xs font-bold mt-2 flex items-center gap-1">
                    ● INSCRIPTION OUVERTE
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-xs font-bold mb-1">DÉBUT DANS</p>
                <p className="text-3xl font-black text-white">04:12:44</p>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border border-slate-700 flex items-center justify-center text-xs font-bold">
                      👤
                    </div>
                  ))}
                </div>
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                  +12
                </div>
                <p className="text-slate-400 text-xs font-bold ml-2">PARTICIPANTS</p>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-xs font-bold mb-1">DOTATION</p>
                <p className="text-2xl font-black text-white">$50,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tournament Bracket Overview */}
        <div className="border border-slate-700 rounded-2xl p-8 mb-8 bg-[#111927]">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-white text-lg font-bold uppercase">
              APERÇU DE L'ARBRE
            </h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold text-xs transition-colors">
              QUARTS
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Featured Brackets */}
            <div className="border border-blue-500 rounded-xl p-6 bg-slate-800/50">
              <p className="text-white font-bold text-lg mb-2">SENTINELS</p>
              <p className="text-blue-400 font-black text-4xl">13</p>
            </div>
            <div className="border border-blue-500 rounded-xl p-6 bg-slate-800/50">
              <p className="text-white font-bold text-lg mb-2">FINATIC</p>
              <p className="text-blue-400 font-black text-4xl">20</p>
            </div>

            {/* Other Teams */}
            <div className="border border-slate-600 rounded-xl p-6 bg-slate-800/30">
              <p className="text-slate-400 font-bold text-lg mb-2">LOUD</p>
              <p className="text-slate-400 font-black text-4xl">9</p>
            </div>
            <div className="border border-slate-600 rounded-xl p-6 bg-slate-800/30">
              <p className="text-slate-400 font-bold text-lg mb-2">ZETA</p>
              <p className="text-slate-400 font-black text-4xl">18</p>
            </div>
          </div>
        </div>

        {/* Join Tournament Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 via-blue-600 to-purple-600 hover:from-blue-700 hover:via-blue-700 hover:to-purple-700 text-white py-4 rounded-full font-black text-lg transition-all shadow-lg hover:shadow-blue-500/50">
          📋 REJOINDRE LE TOURNOI
        </button>
      </div>
    </div>
  );
};

export default TournamentPage;
