import { contextBridge, ipcRenderer } from 'electron';

// Exposer les API sécurisées au renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  // Authentification
  login: (email: string, password: string) => 
    ipcRenderer.invoke('auth:login', email, password),
  
  register: (username: string, email: string, password: string) => 
    ipcRenderer.invoke('auth:register', username, email, password),
  
  // Récupérer l'utilisateur actuel
  getCurrentUser: () => 
    ipcRenderer.invoke('auth:getCurrentUser'),
  
  // Déconnexion
  logout: () => 
    ipcRenderer.invoke('auth:logout'),

  // Stats
  getUserStats: (userId: number) =>
    ipcRenderer.invoke('stats:getUserStats', userId),

  saveUserStats: (stats: {
    user_id: number;
    rank_name: string;
    rank_rating: number;
    win_rate: number;
    kd_ratio: number;
    avg_damage: number;
  }) => ipcRenderer.invoke('stats:saveUserStats', stats),
});

// Types pour TypeScript
export interface ElectronAPI {
  login: (email: string, password: string) => Promise<any>;
  register: (username: string, email: string, password: string) => Promise<any>;
  getCurrentUser: () => Promise<any>;
  logout: () => Promise<void>;
  getUserStats: (userId: number) => Promise<any>;
  saveUserStats: (stats: {
    user_id: number;
    rank_name: string;
    rank_rating: number;
    win_rate: number;
    kd_ratio: number;
    avg_damage: number;
  }) => Promise<any>;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}
