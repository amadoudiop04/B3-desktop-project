// src/main.tsx (ou renommez renderer.ts en main.tsx)
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // N'oubliez pas l'import de votre CSS Tailwind !

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}