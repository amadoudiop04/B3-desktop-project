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

  // Profile
  updateProfile: (userId: number, updates: {
    username?: string;
    email?: string;
    riotId?: string;
    tagLine?: string;
  }) => ipcRenderer.invoke('user:updateProfile', userId, updates),

  updatePassword: (userId: number, newPassword: string) =>
    ipcRenderer.invoke('user:updatePassword', userId, newPassword),

  // Products
  getProducts: () =>
    ipcRenderer.invoke('products:getProducts'),

  // Orders
  createOrder: (orderData: {
    user_id: number;
    total_ttc: number;
    payment_method: 'Card' | 'PayPal' | 'Crypto';
    items: Array<{
      product_id: number;
      quantity: number;
      price_at_purchase: number;
    }>;
  }) => ipcRenderer.invoke('orders:create', orderData),

  getUserOrders: (userId: number) =>
    ipcRenderer.invoke('orders:getUserOrders', userId),

  updateOrderStatus: (orderId: number, status: string) =>
    ipcRenderer.invoke('orders:updateStatus', orderId, status),

  getOrderDetails: (orderId: number) =>
    ipcRenderer.invoke('orders:getDetails', orderId),

  // Matches
  getAllMatches: () =>
    ipcRenderer.invoke('matches:getAll'),

  getUserMatches: (userId: number) =>
    ipcRenderer.invoke('matches:getUserMatches', userId),

  getRecentMatches: (limit?: number) =>
    ipcRenderer.invoke('matches:getRecent', limit),

  getPlayerStats: (userId: number) =>
    ipcRenderer.invoke('matches:getPlayerStats', userId),

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
  }) => ipcRenderer.invoke('matches:create', matchData),

  getLeaderboard: (limit?: number) =>
    ipcRenderer.invoke('matches:getLeaderboard', limit),
});
