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

export interface OrderItem {
  product_id: number;
  quantity: number;
  price_at_purchase: number;
}

export interface CreateOrderData {
  user_id: number;
  total_ttc: number;
  payment_method: 'Card' | 'PayPal' | 'Crypto';
  items: OrderItem[];
}

export interface Order {
  id: number;
  user_id: number;
  total_ttc: number;
  payment_method: string;
  status: string;
  created_at: Date;
}

export interface OrderResponse {
  success: boolean;
  orderId?: number;
  orders?: Order[];
  order?: any;
  error?: string;
}

export interface Match {
  id: number;
  user_id: number;
  map_name: string;
  score_home: number;
  score_away: number;
  result: string;
  agent_played: string;
  kills: number;
  deaths: number;
  assists: number;
  played_at: Date;
}

export interface MatchWithUser extends Match {
  username?: string;
}

export interface PlayerStats {
  total_matches: number;
  wins: number;
  losses: number;
  total_kills: number;
  total_deaths: number;
  total_assists: number;
  avg_kills: number;
  avg_deaths: number;
  avg_assists: number;
  winrate: number;
}

export interface LeaderboardEntry {
  id: number;
  username: string;
  total_matches: number;
  wins: number;
  total_kills: number;
  total_deaths: number;
  winrate: number;
  kd_ratio: number;
}

export interface MatchResponse {
  success: boolean;
  matches?: Match[] | MatchWithUser[];
  match?: Match;
  matchId?: number;
  stats?: PlayerStats | null;
  leaderboard?: LeaderboardEntry[];
  error?: string;
}

export interface ElectronAPI {
  login: (email: string, password: string) => Promise<AuthResponse>;
  register: (username: string, email: string, password: string) => Promise<AuthResponse>;
  getCurrentUser: () => Promise<AuthResponse>;
  logout: () => Promise<{ success: boolean }>;
  getUserStats: (userId: number) => Promise<StatsResponse>;
  saveUserStats: (stats: UserStats) => Promise<{ success: boolean; error?: string }>;
  updateProfile: (userId: number, updates: {
    username?: string;
    email?: string;
    riotId?: string;
    tagLine?: string;
  }) => Promise<AuthResponse>;
  updatePassword: (userId: number, newPassword: string) => Promise<{ success: boolean; error?: string }>;
  getProducts: () => Promise<{
    success: boolean;
    products?: Array<{
      id: number;
      name: string;
      price: number;
      category: string;
      image_url: string;
      stock_quantity: number;
    }>;
    error?: string;
  }>;
  createOrder: (orderData: CreateOrderData) => Promise<OrderResponse>;
  getUserOrders: (userId: number) => Promise<OrderResponse>;
  updateOrderStatus: (orderId: number, status: string) => Promise<{ success: boolean; error?: string }>;
  getOrderDetails: (orderId: number) => Promise<OrderResponse>;
  getAllMatches: () => Promise<MatchResponse>;
  getUserMatches: (userId: number) => Promise<MatchResponse>;
  getRecentMatches: (limit?: number) => Promise<MatchResponse>;
  getPlayerStats: (userId: number) => Promise<MatchResponse>;
  createMatch: (matchData: {
    user_id: number;
    map_name: string;
    score_home: number;
    score_away: number;
    result: string;
    agent_played: string;
    kills: number;
    deaths: number;
    assists: number;
  }) => Promise<MatchResponse>;
  getLeaderboard: (limit?: number) => Promise<MatchResponse>;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

export {};
