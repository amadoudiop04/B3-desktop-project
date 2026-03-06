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

export interface UserStats {
  user_id: number;
  rank_name: string;
  rank_rating: number;
  win_rate: number;
  kd_ratio: number;
  avg_damage: number;
}

export interface StatsResponse {
  success: boolean;
  stats?: UserStats | null;
  error?: string;
}

export interface ElectronAPI {
  login: (email: string, password: string) => Promise<AuthResponse>;
  register: (username: string, email: string, password: string) => Promise<AuthResponse>;
  getCurrentUser: () => Promise<AuthResponse>;
  logout: () => Promise<{ success: boolean }>;
  getUserStats: (userId: number) => Promise<StatsResponse>;
  saveUserStats: (stats: UserStats) => Promise<{ success: boolean; error?: string }>;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

export {};
