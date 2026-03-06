import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import started from 'electron-squirrel-startup';
import { testConnection, closePool } from './database/connection';
import { createUser, authenticateUser, findUserById } from './database/userService';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}

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
};

// Initialiser l'application
const initializeApp = async () => {
  // Tester la connexion à la base de données
  const isConnected = await testConnection();
  if (!isConnected) {
    console.error('⚠️  Impossible de se connecter à la base de données');
    console.error('Vérifiez votre fichier .env et que MySQL est en cours d\'exécution');
  }

  // Configurer les IPC handlers
  setupIpcHandlers();

  // Créer la fenêtre
  createWindow();
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
