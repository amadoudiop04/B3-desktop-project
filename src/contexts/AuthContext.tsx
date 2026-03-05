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

  // Charger l'utilisateur depuis localStorage au montage
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Récupérer les utilisateurs depuis localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find((u: any) => u.email === email && u.password === password);

    if (!foundUser) {
      throw new Error('Email ou mot de passe incorrect');
    }

    const loggedInUser = {
      id: foundUser.id,
      email: foundUser.email,
      username: foundUser.username,
    };

    setUser(loggedInUser);
    localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
  };

  const register = async (username: string, email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Vérifier si l'email existe déjà
    if (users.some((u: any) => u.email === email)) {
      throw new Error('Cet email est déjà utilisé');
    }

    if (password.length < 6) {
      throw new Error('Le mot de passe doit contenir au moins 6 caractères');
    }

    const newUser = {
      id: Date.now().toString(),
      username,
      email,
      password, // En production, il faudrait hasher le mot de passe
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Connecter automatiquement après l'inscription
    const loggedInUser = {
      id: newUser.id,
      email: newUser.email,
      username: newUser.username,
    };

    setUser(loggedInUser);
    localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
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
