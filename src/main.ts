import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import started from 'electron-squirrel-startup';
import { testConnection, closePool } from './database/connection';
import { createUser, authenticateUser, updateUserPassword, updateUserProfile } from './database/userService';
import { getUserStats, saveUserStats } from './database/statsService';
import { getProducts } from './database/productService';
import { createOrder, getUserOrders, updateOrderStatus, getOrderDetails } from './database/orderService';
import { getAllMatches, getUserMatches, getRecentMatchesWithUsers, getPlayerStats, createMatch, getLeaderboard } from './database/matchService';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}

// Désactiver les erreurs de cache GPU sur Windows
app.commandLine.appendSwitch('disable-gpu-shader-disk-cache');
app.commandLine.appendSwitch('disable-gpu-compositing');
app.commandLine.appendSwitch('disable-software-rasterizer');
app.commandLine.appendSwitch('no-sandbox');

// S'assurer qu'une seule instance de l'app tourne pour éviter les conflits de cache
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
}

app.on('second-instance', () => {
  // Si quelqu'un essaie d'ouvrir une 2e instance, focus sur la fenêtre existante
  const windows = BrowserWindow.getAllWindows();
  if (windows.length > 0) {
    const mainWindow = windows[0];
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  }
});

// Stocker l'utilisateur actuellement connecté
let currentUser: any = null;

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`),
    );
  }

  // Open the DevTools only in development
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.webContents.openDevTools();
  }
};

// IPC Handlers pour l'authentification
const setupIpcHandlers = () => {
  console.log('🔧 Enregistrement des IPC handlers...');
  
  const channels = [
    'auth:login',
    'auth:register',
    'auth:getCurrentUser',
    'auth:logout',
    'stats:getUserStats',
    'stats:saveUserStats',
    'products:getProducts',
    'user:updateProfile',
    'user:updatePassword',
    'orders:create',
    'orders:getUserOrders',
    'orders:updateStatus',
    'orders:getDetails',
    'matches:getAll',
    'matches:getUserMatches',
    'matches:getRecent',
    'matches:getPlayerStats',
    'matches:create',
    'matches:getLeaderboard',
  ];

  for (const channel of channels) {
    ipcMain.removeHandler(channel);
  }

  // Connexion
  ipcMain.handle('auth:login', async (_event, email: string, password: string) => {
    try {
      const user = await authenticateUser(email, password);
      currentUser = user;
      return { success: true, user };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Erreur de connexion' 
      };
    }
  });

  // Inscription
  ipcMain.handle('auth:register', async (_event, username: string, email: string, password: string) => {
    try {
      const user = await createUser(username, email, password);
      currentUser = user;
      return { success: true, user };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Erreur lors de l\'inscription' 
      };
    }
  });

  // Récupérer l'utilisateur actuel
  ipcMain.handle('auth:getCurrentUser', async () => {
    return { success: true, user: currentUser };
  });

  // Déconnexion
  ipcMain.handle('auth:logout', async () => {
    currentUser = null;
    return { success: true };
  });

  // Récupérer les stats d'un utilisateur
  ipcMain.handle('stats:getUserStats', async (_event, userId: number) => {
    try {
      const stats = await getUserStats(userId);
      return { success: true, stats };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur lors de la récupération des stats',
      };
    }
  });

  // Sauvegarder les stats d'un utilisateur
  ipcMain.handle('stats:saveUserStats', async (_event, stats) => {
    try {
      const saved = await saveUserStats(stats);
      return { success: saved };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur lors de la sauvegarde des stats',
      };
    }
  });

  // Recuperer les produits de la boutique
  ipcMain.handle('products:getProducts', async () => {
    try {
      const products = await getProducts();
      return { success: true, products };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur lors de la recuperation des produits',
      };
    }
  });

  // Mettre à jour le profil utilisateur
  ipcMain.handle('user:updateProfile', async (_event, userId: number, updates: { username?: string; email?: string; riotId?: string; tagLine?: string }) => {
    try {
      const updatedUser = await updateUserProfile(userId, updates.username, updates.email, updates.riotId, updates.tagLine);
      if (updatedUser && currentUser && currentUser.id === userId) {
        currentUser = updatedUser;
      }
      return { success: true, user: updatedUser };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur lors de la mise à jour du profil',
      };
    }
  });

  // Mettre à jour le mot de passe utilisateur
  ipcMain.handle('user:updatePassword', async (_event, userId: number, newPassword: string) => {
    try {
      const updated = await updateUserPassword(userId, newPassword);
      return { success: updated };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur lors de la mise à jour du mot de passe',
      };
    }
  });

  // Créer une nouvelle commande
  ipcMain.handle('orders:create', async (_event, orderData: any) => {
    try {
      console.log('📦 Création de commande:', orderData);
      const orderId = await createOrder(orderData);
      console.log('✅ Commande créée:', orderId);
      return { success: true, orderId };
    } catch (error) {
      console.error('❌ Erreur lors de la création de commande:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur lors de la création de la commande',
      };
    }
  });

  // Récupérer les commandes d'un utilisateur
  ipcMain.handle('orders:getUserOrders', async (_event, userId: number) => {
    try {
      const orders = await getUserOrders(userId);
      return { success: true, orders };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur lors de la récupération des commandes',
      };
    }
  });

  // Mettre à jour le statut d'une commande
  ipcMain.handle('orders:updateStatus', async (_event, orderId: number, status: string) => {
    try {
      const updated = await updateOrderStatus(orderId, status as 'Pending' | 'Paid' | 'Shipped');
      return { success: updated };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur lors de la mise à jour du statut',
      };
    }
  });

  // Récupérer les détails d'une commande
  ipcMain.handle('orders:getDetails', async (_event, orderId: number) => {
    try {
      const order = await getOrderDetails(orderId);
      return { success: true, order };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur lors de la récupération des détails',
      };
    }
  });

  // Récupérer tous les matchs
  ipcMain.handle('matches:getAll', async () => {
    try {
      const matches = await getAllMatches();
      return { success: true, matches };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur lors de la récupération des matchs',
      };
    }
  });

  // Récupérer les matchs d'un utilisateur
  ipcMain.handle('matches:getUserMatches', async (_event, userId: number) => {
    try {
      const matches = await getUserMatches(userId);
      return { success: true, matches };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur lors de la récupération des matchs utilisateur',
      };
    }
  });

  // Récupérer les matchs récents avec infos utilisateur
  ipcMain.handle('matches:getRecent', async (_event, limit: number = 20) => {
    try {
      const matches = await getRecentMatchesWithUsers(limit);
      return { success: true, matches };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur lors de la récupération des matchs récents',
      };
    }
  });

  // Récupérer les statistiques d'un joueur
  ipcMain.handle('matches:getPlayerStats', async (_event, userId: number) => {
    try {
      const stats = await getPlayerStats(userId);
      return { success: true, stats };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur lors de la récupération des statistiques',
      };
    }
  });

  // Créer un nouveau match
  ipcMain.handle('matches:create', async (_event, matchData: any) => {
    try {
      const matchId = await createMatch(matchData);
      return { success: true, matchId };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur lors de la création du match',
      };
    }
  });

  // Récupérer le classement
  ipcMain.handle('matches:getLeaderboard', async (_event, limit: number = 10) => {
    try {
      const leaderboard = await getLeaderboard(limit);
      return { success: true, leaderboard };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur lors de la récupération du classement',
      };
    }
  });

  console.log('✅ Tous les IPC handlers ont été enregistrés');
};

// Initialiser l'application
const initializeApp = async () => {
  try {
    // Configurer les IPC handlers
    console.log('🔧 Démarrage de la configuration des handlers IPC...');
    setupIpcHandlers();
    console.log('✅ Handlers IPC configurés avec succès');
  } catch (error) {
    console.error('❌ Erreur lors de la configuration des handlers:', error);
  }

  // Créer la fenêtre
  createWindow();

  // Tester la connexion à la base de données sans bloquer l'enregistrement IPC
  const isConnected = await testConnection();
  if (!isConnected) {
    console.error('⚠️  Impossible de se connecter à la base de données');
    console.error('Vérifiez votre fichier .env et que MySQL est en cours d\'exécution');
  }
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', initializeApp);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', async () => {
  // Fermer le pool de connexions MySQL
  await closePool();
  
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Fermer proprement la connexion à la base de données à l'arrêt
app.on('before-quit', async () => {
  await closePool();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
