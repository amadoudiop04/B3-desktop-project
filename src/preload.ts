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
});

// Types pour TypeScript
export interface ElectronAPI {
  login: (email: string, password: string) => Promise<any>;
  register: (username: string, email: string, password: string) => Promise<any>;
  getCurrentUser: () => Promise<any>;
  logout: () => Promise<void>;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}
