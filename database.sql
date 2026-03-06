-- Création de la base de données
CREATE DATABASE IF NOT EXISTS b3_desktop_db;
USE b3_desktop_db;

-- Création de la table users
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Index pour améliorer les performances de recherche
CREATE INDEX idx_email ON users(email);
CREATE INDEX idx_username ON users(username);
