import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  username: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Charger l'utilisateur actuel au montage
  useEffect(() => {
    const loadCurrentUser = async () => {
      try {
        if (window.electronAPI) {
          const response = await window.electronAPI.getCurrentUser();
          if (response.success && response.user) {
            setUser({
              id: response.user.id.toString(),
              email: response.user.email,
              username: response.user.username,
            });
          }
        }
      } catch (error) {
        console.error('Erreur lors du chargement de l\'utilisateur:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCurrentUser();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      if (!window.electronAPI) {
        throw new Error('API Electron non disponible');
      }

      const response = await window.electronAPI.login(email, password);

      if (!response.success) {
        throw new Error(response.error || 'Erreur de connexion');
      }

      setUser({
        id: response.user.id.toString(),
        email: response.user.email,
        username: response.user.username,
      });
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      throw error;
    }
  };

  const register = async (username: string, email: string, password: string) => {
    try {
      if (!window.electronAPI) {
        throw new Error('API Electron non disponible');
      }

      const response = await window.electronAPI.register(username, email, password);

      if (!response.success) {
        throw new Error(response.error || 'Erreur lors de l\'inscription');
      }

      setUser({
        id: response.user.id.toString(),
        email: response.user.email,
        username: response.user.username,
      });
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      if (window.electronAPI) {
        await window.electronAPI.logout();
      }
      setUser(null);
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé à l\'intérieur du AuthProvider');
  }
  return context;
};
