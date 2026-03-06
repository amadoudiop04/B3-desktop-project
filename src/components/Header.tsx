import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  username: string;
}

export const Header: React.FC<HeaderProps> = ({ username }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { logout } = useAuth();

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

    if (action === 'logout') {
      logout();
      return;
    }
  };

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
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsSettingsOpen((open) => !open)}
            aria-expanded={isSettingsOpen}
            aria-haspopup="menu"
            className="w-9 h-9 bg-[#111927] rounded-lg flex items-center justify-center hover:bg-[#243554] transition"
          >
            ⚙️
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
                Parametres
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
                Deconnexion
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
