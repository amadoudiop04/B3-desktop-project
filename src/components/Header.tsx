import React from 'react';

interface HeaderProps {
  username: string;
}

export const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-[#061325] border-b border-gray-800">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-sm">
          {username.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="text-xs text-gray-400">BIENVENUE</p>
          <p className="font-bold">
            {username} <span className="text-blue-500">#LUG</span>
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="w-9 h-9 bg-[#111927] rounded-lg flex items-center justify-center hover:bg-[#243554] transition">
          🔔
        </button>
        <button className="w-9 h-9 bg-[#111927] rounded-lg flex items-center justify-center hover:bg-[#243554] transition">
          ⚙️
        </button>
      </div>
    </header>
  );
};
