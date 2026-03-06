// Déclarations TypeScript pour l'API Electron exposée via preload

export interface User {
  id: number;
  username: string;
  email: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  error?: string;
}

export interface ElectronAPI {
  login: (email: string, password: string) => Promise<AuthResponse>;
  register: (username: string, email: string, password: string) => Promise<AuthResponse>;
  getCurrentUser: () => Promise<AuthResponse>;
  logout: () => Promise<{ success: boolean }>;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

export {};
